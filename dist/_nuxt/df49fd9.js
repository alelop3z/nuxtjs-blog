(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{252:function(t,e,n){"use strict";n.r(e);var l={props:["post"]},r=n(13),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card blog-post-card"},[t.post.image?n("nuxt-link",{staticClass:"theme-link",attrs:{to:t.post.path}},[n("img",{staticClass:"card-img-top",attrs:{src:t.post.image,alt:t.post.title}})]):t._e(),t._v(" "),n("div",{staticClass:"card-body"},[n("h5",{staticClass:"card-title"},[n("nuxt-link",{staticClass:"theme-link",attrs:{to:t.post.path}},[t._v(t._s(t.post.title))])],1),t._v(" "),n("p",{staticClass:"card-text"},[t._v(t._s(t.post.description))]),t._v(" "),n("p",{staticClass:"mb-0"},[n("nuxt-link",{staticClass:"theme-link",attrs:{to:t.post.path}},[t._v("Leer más →")])],1),t._v(" "),n("PostTags",{attrs:{tags:t.post.tags}})],1),t._v(" "),n("div",{staticClass:"card-footer"},[n("small",{staticClass:"text-muted"},[t._v(t._s(t.post.publish_at))])])],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{PostTags:n(253).default})},253:function(t,e,n){"use strict";n.r(e);var l={props:["tags"]},r=n(13),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"blog-post-tags"},t._l(t.tags,(function(e,l){return n("nuxt-link",{key:l,attrs:{to:"/tags/"+e}},[t._v("\n    "+t._s(e)+"\n  ")])})),1)}),[],!1,null,null,null);e.default=component.exports},270:function(t,e,n){"use strict";n.r(e);n(24);var l=n(4),r={asyncData:function(t){return Object(l.a)(regeneratorRuntime.mark((function e(){var n,l,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,e.next=3,n("pages/index").fetch();case 3:return l=e.sent,e.next=6,n("posts").only(["title","description","publish_at","tags","image","path"]).limit(6).sortBy("publish_at","desc").where({published:!0}).fetch().catch((function(t){error({statusCode:404,message:"Página no encontrada"})}));case 6:return r=e.sent,e.abrupt("return",{index:l,posts:r});case 8:case"end":return e.stop()}}),e)})))()}},o=n(13),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("h1",{staticClass:"text-3xl py-6"},[t._v(t._s(t.index.title))]),t._v(" "),n("p",{staticClass:"text-xl py-3"},[t._v(t._s(t.index.description))])])]),t._v(" "),n("section",{staticClass:"latest-blog-section p-3 p-lg-5"},[n("div",{staticClass:"container"},[n("h2",{staticClass:"section-title font-weight-bold mb-5"},[t._v("Últimos posts")]),t._v(" "),n("div",{staticClass:"row"},t._l(t.posts,(function(t,e){return n("div",{key:e,staticClass:"col-md-4 mb-5"},[n("Post",{attrs:{post:t}})],1)})),0),t._v(" "),n("div",{staticClass:"text-center py-3"},[n("nuxt-link",{staticClass:"btn btn-primary",attrs:{to:"/blog",title:"Ver blog"}},[t._v("\n            Ver más posts\n          ")])],1)])])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Post:n(252).default})}}]);