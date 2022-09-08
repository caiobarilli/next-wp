<?php
/**
 *
 * Include require plugins the TGM Plugin Activation.
 *
 * @package wp_custom_theme
 *
 */

require_once get_stylesheet_directory() . '/inc/class-tgm-plugin-activation.php';

function custom_theme_require_plugins()
{
    $plugins = array(


        array(
            'name'               => 'Advanced Custom Fields',
            'slug'               => 'advanced-custom-fields',
            'source'             => get_stylesheet_directory() . '/plugins/advanced-custom-fields.5.9.5.zip',
            'required'           => false, // this plugin is required
            'external_url'       => 'https://br.wordpress.org/plugins/advanced-custom-fields/', // page of my plugin
            'force_deactivation' => true, // deactivate this plugin when the user switches to another theme
        ),

        array(
            'name'               => 'Custom Post Type UI',
            'slug'               => 'custom-post-type-ui',
            'source'             => get_stylesheet_directory() . '/plugins/custom-post-type-ui.1.8.2.zip',
            'required'           => false, // this plugin is required
            'external_url'       => 'https://br.wordpress.org/plugins/custom-post-type-ui/', // page of my plugin
            'force_deactivation' => true, // deactivate this plugin when the user switches to another theme
        ),

    );

    $config = array( /* The array to configure TGM Plugin Activation */ );

    tgmpa($plugins, $config);
}
add_action('tgmpa_register', 'custom_theme_require_plugins');
