<?php

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( class_exists( 'WP_COUTB' ) ) {
	return;
}

class WP_COUTB {
	/**
	 * The script JS handle name.
	 *
	 * @since  0.1.0
	 * @access private
	 */
	private const SCRIPT_HANDLE = 'wp-coutb.block.js';

	/**
	 * Initialize the action and filter hooks so the
	 * callout boxes can render properly. Also will register the
	 * shortcode for classic editor.
	 *
	 * @since 0.1.0
	 */
	public function __construct() {
		add_action( 'enqueue_block_editor_assets', array( $this, 'enqueue_editor_block_assets' ) );
		add_action( 'wp_enqueue_scripts', array( $this, 'enqueue_scripts' ) );
		add_filter( 'render_block', array( $this, 'fix_inline_svg_attributes' ), 10, 2 );
		add_shortcode( 'wp-callout', array( $this, 'render_shortcode' ) );
	}

	/**
	 * Render the callout box from a shortcode.
	 * The rendered content will be the same as the Gutenberg block.
	 *
	 * @since  0.1.0
	 *
	 * @param  array    $atts      The attributes specified in the shortcode.
	 * @param  string   $content   The text content inside of the callout.
	 * @return string              The callout box HTML.
	 */
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
			'icon'   => 'check-circle',
			'type'   => 'primary',
			'method' => 'solid',
		), $atts );

		$types = array(
			'primary',
			'success',
			'danger',
			'warning',
		);

		$methods = array(
			'solid',
			'outline',
		);

		$box_atts['type'] = ! in_array( $box_atts['type'], $types, true )
			? 'primary'
			: $box_atts['type'];

		$box_atts['method'] = ! in_array( $box_atts['method'], $methods, true )
			? 'solid'
			: $box_atts['method'];

		$heroicon = heroicon( $box_atts['icon'], array(), $box_atts['method'] );
		$callout  = '<div class="wp-coutb-callout-box ' . esc_attr( $box_atts['type'] ) . '">';
		$callout .= '<div class="wp-coutb-callout-box__icon ' . esc_attr( $box_atts['method'] ) . '">';
		$callout .=  $heroicon . '</div>';
		$callout .= '<p>' . trim( $content ) . '</p>';
		$callout .= '</div>';

		// Register filter that adds "<br>" tags added by WordPress.
		add_filter( 'the_content', 'wpautop', 12 );

		return $callout;
	}

	/**
	 * Add the missing dash character from the saved SVG HTML.
	 *
	 * By default, the saved SVG in the database won't include some dashes
	 * that's why we need to include dashes.
	 *
	 * @since  0.1.0
	 *
	 * @param  string   $block_content   The block content.
	 * @param  array    $block           The block attributes.
	 * @return string                    The fixed block content.
	 */
	public function fix_inline_svg_attributes( $block_content, $block ) {
		if ( $block['blockName'] !== WP_COUTB_GUTENBERG_BLOCK ) {
			return $block_content;
		}

		$search = array(
			'fillrule=',
			'cliprule=',
			'viewbox=',
			'strokewidth=',
			'strokelinecap=',
			'strokelinejoin=',
		);

		$replace = array(
			'fill-rule=',
			'clip-rule=',
			'viewBox=',
			'stroke-width=',
			'stroke-linecap=',
			'stroke-linejoin=',
		);

		return str_replace( $search, $replace, $block_content );
	}

	/**
	 * Enqueue the styles to render the callout boxes properly.
	 * It will enqueue in frontend side.
	 *
	 * @since 0.1.0
	 */
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

	/**
	 * Enqueue the assets in the block editor so the callout box
	 * can render properly.
	 *
	 * @since 0.1.0
	 */
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
