<?php
/**
 *
 * App functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package wp_custom_theme
 *
 */


require_once get_stylesheet_directory() . '/inc/plugins.php';

define('THEME_VERSION', wp_get_theme()->get('Version'));
