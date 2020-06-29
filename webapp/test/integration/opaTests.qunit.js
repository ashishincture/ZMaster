/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"inc/trng/od/ZMASTER_DETAIL/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});