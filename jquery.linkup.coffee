``
(($) ->
  replacer = (find, replace, element, options) ->
    return  if not find or not replace
    regex = (if (typeof find is "string") then new RegExp(find, "ig") else find)
    childNodes = element.childNodes
    len = childNodes.length
    while len--
      node = childNodes[len]
      replacer find, replace, node, options  if options.blackList.indexOf(node.nodeName.toLowerCase()) is -1
      continue  if node.nodeType isnt 3 or not regex.test(node.data)
      wrap = document.createElement("span")
      frag = document.createDocumentFragment()
      wrap.innerHTML = node.data.replace(regex, "<a href=\"" + replace + "\" rel=\"" + options.link_rel + "\" target=\"_blank\" class=\"" + options.link_class + "\" title=\"" + find + "\">" + find + "</a>")
      frag.appendChild wrap.firstChild  while wrap.firstChild
      node.parentNode.replaceChild frag, node
  $.fn.linkup = (items, options) ->
    defaults =
      blackList: "html,head,style,title,link,meta,script,object,embed,iframe,pre,a"
      link_class: "link-up"
      link_rel: "external"

    opts = $.extend(defaults, options)
    @each (i, e) ->
      for i of items
        replacer items[i].find, items[i].replace, e, opts
) jQuery
