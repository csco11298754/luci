'use strict';
'require form';

return L.Class.extend({
	title: _('UPS Plugin Configuration'),
	description: _('The NUT plugin reads information about Uninterruptible Power Supplies.'),

	addFormOptions: function(s) {
		var o;

		o = s.option(form.Flag, 'enable', _('Enable this plugin'));
		o.default = '0';

		o = s.option(form.Value, 'UPS', _('UPS'), _('UPS name in NUT ups@host format'));
		o.rmempty = true;
	},

	configSummary: function(section) {
		var ups = L.toArray(section.UPS);

		if (ups.length)
			return N_(ups.length, 'Monitoring one UPS', 'Monitoring %d UPSes').format(ups.length);
	}
});
