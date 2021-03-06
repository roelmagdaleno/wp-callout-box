<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInitd83e8809354906895aa256d1fe63c6fe
{
    public static $files = array (
        '74abb39d2de55f5b56d39849b218bd94' => __DIR__ . '/..' . '/roelmagdaleno/php-heroicons/src/Helpers.php',
    );

    public static $prefixLengthsPsr4 = array (
        'S' => 
        array (
            'SVG\\' => 4,
        ),
        'P' => 
        array (
            'PHPHeroIcons\\' => 13,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'SVG\\' => 
        array (
            0 => __DIR__ . '/..' . '/meyfa/php-svg/src',
        ),
        'PHPHeroIcons\\' => 
        array (
            0 => __DIR__ . '/..' . '/roelmagdaleno/php-heroicons/src',
        ),
    );

    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInitd83e8809354906895aa256d1fe63c6fe::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInitd83e8809354906895aa256d1fe63c6fe::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInitd83e8809354906895aa256d1fe63c6fe::$classMap;

        }, null, ClassLoader::class);
    }
}
