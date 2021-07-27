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
	}

	public function enqueue_editor_block_assets() {
		wp_enqueue_style(
			'wp-coutb.block.css',
			plugins_url( 'admin/css/wp-coutb.block.css', __DIR__ ),
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
