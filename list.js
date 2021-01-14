var List = [
		{ type: 'naive aurelia', id: 'aurelia', url: './aurelia', label: 'Aurelia'},
		{ type: 'odajs', id: 'odajs', url: './odajs', label: 'ODAJS', hide_label: true },
		{ type: 'optimized aurelia', url: './aurelia-optimized', id: 'aurelia', label: 'Aurelia' },
		{ type: 'naive', id: 'cycle', url: './cycle', label: 'Cycle.js' },
		{ type: 'naive ember', id: 'ember', url: './ember' , label: 'Ember' },
		{ type: 'naive angular', id: 'angular', url: './angular', label: 'Angular', hide_label: true },
		{ type: 'naive angular-light', id: 'angular-light', url: './angular-light', label: 'Angular-light', hide_label: true },
		{ type: 'naive', id: 'angular2', url: './angular2', label: 'Angular 2.0 Alpha' },
		{ type: 'naive react', id: 'react', url: './react', label: 'React' },
		{ type: 'naive', id: 'magjs', url: './magjs', label: 'MagJS' },
		{ type: 'naive', id: 'mol', url: './mol/index.html', label: '$mol'},
		{ type: 'naive', id: 'elem', url: './elem', label: 'elem' },
		{ type: 'naive', id: 'elem-vdom', url: './elem-vdom', label: 'elem-vdom' },
		{ type: 'naive', id: 'elm', url: './elm', label: 'elm' },
		{ type: 'naive', id: 'ractive', url: './ractive', label: 'Ractive' },
		{ type: 'naive', id: 'mithril', url: './mithril', label: 'Mithril' },
		{ type: 'naive', id: 'citot7', url: './cito+t7-precompiled', label: 'Cito+t7' },
		{ type: 'naive', id: 'inferno', url: './inferno', label: 'Inferno' },
		{ type: 'naive', id: 'riot', url: './riot', label: 'Riot.js' },
		{ type: 'optimized', id: 'riot', url: './riot/no-reorder.html', label: 'Riot.js ( no-reorder )' },
		{ type: 'naive polymer ', id: 'polymer', url: './polymer', label: 'Polymer 1.8' },
		{ type: 'naive', id: 'polymer2', url: './polymer2', label: 'Polymer 2.0 (rc.2, pure ES6)' },
		{ type: 'naive', id: 'vanilla', url: './vanilla-simple', label: 'vanilla' },
		{ type: 'naive', id: 'dott', url: './dotT', label: 'dotT' },
		{ type: 'naive', id: 'canvas', url: './canvas', label: 'canvas' },
		{ type: 'naive', id: 'react-canvas', url: './react-canvas', label: 'react-canvas' },
		{ type: 'naive', id: 'sammy', url: './sammy', label: 'sammy' },
		{ type: 'naive vue', id: 'vue', url: './vue', label: 'vue' },
		{ type: 'naive vue', id: 'vue2', url: './vue2', label: 'vue2.js' },
		{ type: 'naive backbone', id: 'backbone', url: './backbone', label: 'Backbone' },
		{ type: 'naive backbone', id: 'backbone-marionette', url: './marionette', label: 'Backbone Marionette' },
		{ type: 'optimized backbone', id: 'backbone-marionette', url: './marionette/opt.html', label: 'Backbone Marionette' },
		{ type: 'naive', id: 'knockout', url: './knockout', label: 'Knockout' },
		{ type: 'naive', id: 'regularjs', url: './regularjs', label: 'Regularjs' },
		{ type: 'naive', id: 'maskjs', url: './mask/index.html', label: 'MaskJS' },
		{ type: 'naive', id: 'matreshkajs', url: './matreshka/index.html', label: 'Matreshka.js' },
		{ type: 'naive', id: 'rotorjs', url: './rotorjs/index.html', label: 'RotorJS' },
		{ type: 'optimized', id: "cycle + snabbdom", label: "Cycle.js + Snabbdom", url: "./cycle-snabbdom"},
		{ type: 'optimized', id: 'motorcycle', label: 'Motorcycle.js', url: './motorcycle'},
		{ type: 'naive', id: 'domvm', url: './domvm/index.html', label: 'domvm' },
		{ type: 'optimized', id: 'domvm-optimized', url: './domvm-optimized/index.html', label: 'domvm' },
		{ type: 'naive', id: 'once', url: './once/index.html', label: 'once' },
		{ type: 'naive', id: 'ripple', url: './ripple/index.html', label: 'ripple' },
		{ type: 'naive', id: 'diffhtml', url: './diffhtml/index.html', label: 'diffHTML' },
		{ type: 'optimized react', id: 'react', url: './react/opt.html', label: 'React' },
		{ type: 'optimized', id: 'preact', url: './preact', label: 'Preact' },
		{ type: 'naive', id: 'preact-functional', url: './preact/functional.html', label: 'Preact (Functional)' },
		{ type: 'optimized angular', id: 'angular', url: './angular/opt.html', label: 'Angular', hide_label: true },
		{ type: 'optimized angular-light', id: 'angular-light', url: './angular-light/opt.html', label: 'Angular-light',  hide_label: true },
		{ type: 'optimized', id: 'angular2', url: './angular2/opt.html', label: 'Angular 2.0 Alpha' },
		{ type: 'optimized', id: 'angular-track-by', url: './angular-track-by', label: 'Angular (track by $index)' },
		{ type: 'optimized', id: 'elem', url: './elm/opt.html', label: 'elm' },
		{ type: 'optimized', id: 'vanilla', url: './vanilla-optimized', label: 'vanilla' },
		{ type: 'optimized', id: 'maskjs', url: './mask/index_opt.html', label: 'MaskJS' },
		{ type: 'optimized vue', id: 'vue', url: './vue/opt.html', label: 'Vue.js' },
		{ type: 'optimized vue', id: 'vue2', url: './vue2/opt.html', label: 'vue2.js' },
		{ type: 'optimized', id: 'rotorjs', url: './rotorjs/with_thunks.html', label: 'RotorJS (with using VnodeImmutableThunk)' },
		{ type: 'naive', id: 're-frame', url: './re-frame/index.html', label: 're-frame (Reagent)' },
		{ type: 'naive', id: 'd3', url: './d3/index.html', label: 'D3' },
		{ type: 'naive', id: 'morphdom', url: './morphdom/index.html', label: 'Morphdom' },
		{ type: 'optimized', id: 'frzr', url: './frzr/index.html', label: 'FRZR' },
		{ type: 'naive', id: 'vidom', url: './vidom/index.html', label: 'vidom' },
		{ type: 'optimized', id: 'cycle + xstream', label: 'Cycle.js + xstream', url: './cycle-xstream' },
		{ type: 'naive', id: 'rionite', url: './rionite', label: 'Rionite' },
		{ type: 'naive', id: 'monkberry', url: './monkberry/index.html', label: 'Monkberry' },
		{ type: 'naive', id: 'simulacra', url: './simulacra/index.html', label: 'Simulacra' },
		{ type: 'optimized', id: 'simulacra', url: './simulacra/opt.html', label: 'Simulacra' },
		{ type: 'optimized', id: 'dio', url: './dio/index.html', label: 'DIO.js' },
		{ type: 'optimized', id: 'redom', url: './redom/index.html', label: 'RE:DOM' },
		{ type: 'naive', id: 'hyperapp', url: './hyperapp', label: 'HyperApp' },
		{ type: 'naive', id: 'stemjs', url: './stemjs/index.html', label: 'StemJS'},
		{ type: 'optimized', id: 'stemjs', url: './stemjs-optimized', label: 'StemJS'},
		{ type: 'naive', id: 'stencil', url: './stencil/index.html', label: 'Stencil' },
	];
