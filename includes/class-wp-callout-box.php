<?php

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( class_exists( 'WP_COUTB' ) ) {
	return;
}

class WP_COUTB {
	private const SCRIPT_HANDLE = 'wp-coutb.block.js';

	public function __construct() {
		add_action( 'enqueue_block_editor_assets', array( $this, 'enqueue_editor_block_assets' ) );
		add_action( 'wp_enqueue_scripts', array( $this, 'enqueue_scripts' ) );
		add_filter( 'render_block', array( $this, 'fix_inline_svg_attributes' ), 10, 2 );
		add_shortcode( 'wp-callout', array( $this, 'render_shortcode' ) );
	}

	public function render_shortcode( $atts, $content ) {
		global $post;

		if ( ! has_shortcode( $post->post_content, 'wp-callout' ) ) {
			return '';
		}

		require_once dirname( __DIR__ ) . '/vendor/autoload.php';

		wp_enqueue_style(
			'wp-coutb-boxes.css',
			plugins_url( 'admin/css/wp-coutb-boxes.css', __DIR__ ),
			null,
			WP_COUTB_VERSION
		);

		// Remove filter that adds "<br>" tags added by WordPress.
		remove_filter( 'the_content', 'wpautop' );

		$box_atts = shortcode_atts( array(
			'icon' => 'check-circle', // Default "check-circle".
			'type' => 'primary', // Default "primary".
		), $atts );

		$callout  = '<div class="wp-coutb-callout-box ' . esc_attr( $box_atts['type'] ) . '">';
		$callout .= '<div class="wp-coutb-callout-box__icon">' . heroicon( $box_atts['icon'] ) . '</div>';
		$callout .= '<p>' . trim( $content ) . '</p>';
		$callout .= '</div>';

		// Register filter that adds "<br>" tags added by WordPress.
		add_filter( 'the_content', 'wpautop', 12 );

		return $callout;
	}

	public function fix_inline_svg_attributes( $block_content, $block ) {
		if ( $block['blockName'] !== WP_COUTB_GUTENBERG_BLOCK ) {
			return $block_content;
		}

		$search = array(
			'fillrule=',
			'cliprule=',
			'viewbox=',
		);

		$replace = array(
			'fill-rule=',
			'clip-rule=',
			'viewBox=',
		);

		return str_replace( $search, $replace, $block_content );
	}

	public function enqueue_scripts() {
		if ( ! has_block( WP_COUTB_GUTENBERG_BLOCK ) ) {
			return;
		}

		wp_enqueue_style(
			'wp-coutb-boxes.css',
			plugins_url( 'admin/css/wp-coutb-boxes.css', __DIR__ ),
			null,
			WP_COUTB_VERSION
		);
	}

	public function enqueue_editor_block_assets() {
		wp_enqueue_style(
			'wp-coutb.block.css',
			plugins_url( 'admin/css/wp-coutb.block.css', __DIR__ ),
			null,
			WP_COUTB_VERSION
		);

		wp_enqueue_style(
			'wp-coutb-boxes.css',
			plugins_url( 'admin/css/wp-coutb-boxes.css', __DIR__ ),
			null,
			WP_COUTB_VERSION
		);

		wp_enqueue_script(
			self::SCRIPT_HANDLE,
			plugins_url( 'admin/js/' . self::SCRIPT_HANDLE, __DIR__ ),
			array( 'wp-blocks', 'wp-editor', 'wp-element' ),
			WP_COUTB_VERSION,
			true
		);
	}
}
