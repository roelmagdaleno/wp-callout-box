=== Callout Boxes ===
Contributors: rokumetal
Donate link: https://paypal.me/roelmagdaleno
Tags: callout, boxes, alerts
Requires at least: 5.0
Tested up to: 5.8.0
Stable tag: 0.3.2
Requires PHP: 7.0
License: GPLv3 or later
License URI: https://www.gnu.org/licenses/gpl-3.0.html

Insert callout boxes in your posts and pages using shortcodes and Gutenberg blocks.

== Description ==

The callout box includes an icon, and the post content. This plugin uses [Heroicons](https://heroicons.com) and  [php-heroicons](https://github.com/roelmagdaleno/php-heroicons) PHP package.

### Icons

A callout box includes an icon that describes what's the purpose of the callout box.

The plugin is using [Heroicons](https://heroicons.com) so you can go to its website and see what icons are available to use within this plugin.

You can use `solid` and `outline` icons.

### Types

A callout box can have multiple types:

- `primary`
- `success`
- `danger`
- `warning`

By default, the callout box is `primary`.

### Icon Methods

The icon method can be 2 types:

- `solid`
- `outline`

By default, for shortcodes and Gutenberg the icon method is `solid`.

### Shortcode

For WordPress Classic Editor or even Gutenberg, you can use the shortcode:

`
[wp-callout icon="check-circle" type="primary" method="solid"]
Welcome to WordPress. This is the post content.
[/wp-callout]
`

The shortcode supports 3 attributes:

- `icon`. The icon to show in the callout box. (Default: `check-circle`)
- `type` Callout box type. (Default: `primary`)
- `method` (Default: `solid`)

### Gutenberg Block

For Gutenberg users, you can use **Callout Box** block.

Every Gutenberg Callout Box, you can change the icon, type and method using the block properties.

Those properties are the same for the shortcode.

Then, you just type your callout box content inside the Gutenberg block.

## Block Presets

When you insert a new Gutenberg Block Callout you can select 1 of the 4 presets installed in the plugin:

- Information
- Success
- Danger
- Warning

After you select one preset, your callout box will change its background color and icon.

== Screenshots ==

1. screenshot-1: Gutenberg Block.
2. screenshot-2: Callout Boxes.

== Upgrade Notice ==

= 0.3.2 =

FIX: Callout box not responsive on mobile (#9)

= 0.3.1 =

FIX: Custom CSS styles printed in attribute even when those aren't selected (#8)

= 0.3.0 =

FEATURE: Use custom colors for callout boxes. You can change the background, border, icon and text colors.

= 0.2.0 =

Introducing information, success, warning and danger presets.

= 0.1.0 =

Render callout boxes using shortcodes and Gutenberg blocks.

== Changelog ==

= 0.3.2 =

FIX: Callout box not responsive on mobile (#9)

= 0.3.1 =

FIX: Custom CSS styles printed in attribute even when those aren't selected (#8)

= 0.3.0 =

FEATURE: Use custom colors for callout boxes. You can change the background, border, icon and text colors.

= 0.2.0 =

Introducing information, success, warning and danger presets.

= 0.1.0 =

Render callout boxes using shortcodes and Gutenberg blocks.
