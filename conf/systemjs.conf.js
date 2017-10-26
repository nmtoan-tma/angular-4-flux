(function (global) {
    System.config({
        paths: {
            'npm:': './libs/'
        },
        map: {
            app: 'app',
            '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
            '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
            '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
            '@angular/animations': 'npm:@angular/animations/bundles/animations.umd.js',
            '@angular/animations/browser': 'npm:@angular/animations/bundles/animations-browser.umd.js',
            '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
            '@angular/platform-browser/animations': 'npm:@angular/platform-browser/bundles/platform-browser-animations.umd.js',
            '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
            '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
            '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
            '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',
            '@angular/cdk': 'npm:@angular/cdk/bundles/cdk.umd.js',
            '@angular/material': 'npm:@angular/material/bundles/material.umd.js',
            'rxjs': 'npm:rxjs',
            '@ngrx/core': 'npm:@ngrx/core/bundles/core.umd.js',
            '@ngrx/store': 'npm:@ngrx/store/bundles/store.umd.js',
            '@ngrx/effects': 'npm:@ngrx/effects/bundles/effects.umd.js',
            '@ngrx/store-devtools': 'npm:@ngrx/store-devtools/bundles/store-devtools.umd.js',
            '@ngrx/store-log-monitor': 'npm:@ngrx/store-log-monitor/bundles/store-log-monitor.umd.js',
            '@ngrx/router-store': 'npm:@ngrx/router-store/bundles/router-store.umd.js',
            'ngrx-store-freeze': 'npm:ngrx-store-freeze/bundles/ngrx-store-freeze.umd.js',
            'angular2-in-memory-web-api': 'npm:angular2-in-memory-web-api/bundles/in-memory-web-api.umd.js'
        },
        packages: {
            app: {
                main: './main.js',
                defaultExtension: 'js'
            },
            rxjs: {
                defaultExtension: 'js'
            },
            'angular2-in-memory-web-api': {
                main: './index.js',
                defaultExtension: 'js'
            }
        }
    });
})(this);