<?php

/**
 * Plugin Name: Callout Boxes
 * Plugin URI:  https://github.com/roelmagdaleno/wp-callout-box
 * Description: Insert callout boxes in your posts using shortcodes and Gutenberg blocks.
 * Version:     0.3.2
 * Author:      Roel Magdaleno
 * Author URI:  https://roelmagdaleno.com
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

require_once 'includes/required-files.php';
new WP_COUTB();
