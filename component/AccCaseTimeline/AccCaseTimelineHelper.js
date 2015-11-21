({
	doInit : function(cmp, ev) {
		var action = cmp.get("c.getTimeline");
        action.setParams({'accIdStr' : cmp.get('v.recordId')});
        action.setCallback(this, function(resp) {
            cmp.set("v.timeline", resp.getReturnValue());
        });
        $A.enqueueAction(action);
	}
})