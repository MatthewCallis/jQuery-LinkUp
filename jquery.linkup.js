;(function($){
	$.fn.linkup = function(items, options){
		var defaults = {
			blackList: 'html,head,style,title,link,meta,script,object,embed,iframe,pre,a',
			link_class: 'link-up',
			link_rel: 'external'
		};
		var opts = $.extend(defaults, options);
		return this.each(function(i,e){
			for(var j in items){
				replacer(items[j].find, items[j].replace, e, opts);
			}
		});
	};
	function replacer(find, replace, element, options){
		if(!find || !replace){
			return;
		}
		var regex = (typeof find === 'string') ? new RegExp(find, 'ig') : find;
		var childNodes = element.childNodes;
		var len = childNodes.length;
		while(len--){
			var node = childNodes[len];
			if(options.blackList.indexOf(node.nodeName.toLowerCase()) === -1){
				replacer(find, replace, node, options);
			}
			if(node.nodeType !== 3 || !regex.test(node.data)){
				continue;
			}
			var wrap = document.createElement('span');
			var frag = document.createDocumentFragment();
			wrap.innerHTML = node.data.replace(regex, '<a href="' + replace + '" rel="' + options.link_rel + '" target="_blank" class="' + options.link_class + '" title="' + find + '">' + find + '</a>');
			while(wrap.firstChild){
				frag.appendChild(wrap.firstChild);
			}
			node.parentNode.replaceChild(frag, node);
		}
	}
})(jQuery);
