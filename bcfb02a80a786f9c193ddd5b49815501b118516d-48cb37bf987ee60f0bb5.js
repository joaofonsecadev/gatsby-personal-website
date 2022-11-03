"use strict";(self.webpackChunkjoaofonseca_dev=self.webpackChunkjoaofonseca_dev||[]).push([[863],{6162:function(e,t,a){var r=a(5318);t.Z=void 0;var i,n=r(a(1506)),s=r(a(5354)),d=r(a(7316)),o=r(a(7154)),l=r(a(7294)),u=r(a(5697)),c=["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"],f=function(e){var t=(0,o.default)({},e),a=t.resolutions,r=t.sizes,i=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),i&&(t.loading="eager"),t.fluid&&(t.fluid=L([].concat(t.fluid))),t.fixed&&(t.fixed=L([].concat(t.fixed))),t},p=function(e){var t=e.media;return!!t&&(v&&!!window.matchMedia(t).matches)},g=function(e){var t=e.fluid,a=e.fixed,r=h(t||a||[]);return r&&r.src},h=function(e){if(v&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(p);if(-1!==t)return e[t];var a=e.findIndex((function(e){return void 0===e.media}));if(-1!==a)return e[a]}return e[0]},m=Object.create({}),y=function(e){var t=f(e),a=g(t);return m[a]||!1},b="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,v="undefined"!=typeof window,S=v&&window.IntersectionObserver,E=new WeakMap;function w(e){return e.map((function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return l.default.createElement(l.default.Fragment,{key:t},r&&l.default.createElement("source",{type:"image/webp",media:i,srcSet:r,sizes:n}),a&&l.default.createElement("source",{media:i,srcSet:a,sizes:n}))}))}function L(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function R(e){return e.map((function(e){var t=e.src,a=e.media,r=e.tracedSVG;return l.default.createElement("source",{key:t,media:a,srcSet:r})}))}function x(e){return e.map((function(e){var t=e.src,a=e.media,r=e.base64;return l.default.createElement("source",{key:t,media:a,srcSet:r})}))}function I(e,t){var a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(i?'media="'+i+'" ':"")+'srcset="'+(t?r:a)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var O=function(e,t){var a=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver((function(e){e.forEach((function(e){if(E.has(e.target)){var t=E.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),E.delete(e.target),t())}}))}),{rootMargin:"200px"})),i);return a&&(a.observe(e),E.set(e,t)),function(){a.unobserve(e),E.delete(e)}},k=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",d=e.height?'height="'+e.height+'" ':"",o=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",l=e.loading?'loading="'+e.loading+'" ':"",u=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?I(e,!0):"")+I(e)})).join("")+"<img "+l+s+d+a+r+t+n+i+o+u+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},V=l.default.forwardRef((function(e,t){var a=e.src,r=e.imageVariants,i=e.generateSources,n=e.spreadProps,s=e.ariaHidden,d=l.default.createElement(z,(0,o.default)({ref:t,src:a},n,{ariaHidden:s}));return r.length>1?l.default.createElement("picture",null,i(r),d):d})),z=l.default.forwardRef((function(e,t){var a=e.sizes,r=e.srcSet,i=e.src,n=e.style,s=e.onLoad,u=e.onError,f=e.loading,p=e.draggable,g=e.ariaHidden,h=(0,d.default)(e,c);return l.default.createElement("img",(0,o.default)({"aria-hidden":g,sizes:a,srcSet:r,src:i},h,{onLoad:s,onError:u,ref:t,loading:f,draggable:p,style:(0,o.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))}));z.propTypes={style:u.default.object,onError:u.default.func,onLoad:u.default.func};var C=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=v&&y(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!b&&S&&!a.isCritical&&!a.seenBefore;var r=a.isCritical||v&&(b||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn,isHydrated:!1},a.imageRef=l.default.createRef(),a.placeholderRef=t.placeholderRef||l.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,n.default)(a)),a.handleRef=a.handleRef.bind((0,n.default)(a)),a}(0,s.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.setState({isHydrated:v}),this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:y(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=O(e,(function(){var e=y(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=f(e),(a=g(t))&&(m[a]=!0),this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=f(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,n=void 0===i?{}:i,s=e.imgStyle,d=void 0===s?{}:s,u=e.placeholderStyle,c=void 0===u?{}:u,p=e.placeholderClassName,g=e.fluid,m=e.fixed,y=e.backgroundColor,b=e.durationFadeIn,v=e.Tag,S=e.itemProp,E=e.loading,L=e.draggable,I=g||m;if(!I)return null;var O=!1===this.state.fadeIn||this.state.imgLoaded,C=!0===this.state.fadeIn&&!this.state.imgCached,H=(0,o.default)({opacity:O?1:0,transition:C?"opacity "+b+"ms":"none"},d),N="boolean"==typeof y?"lightgray":y,T={transitionDelay:b+"ms"},j=(0,o.default)({opacity:this.state.imgLoaded?0:1},C&&T,d,c),W={title:t,alt:this.state.isVisible?"":a,style:j,className:p,itemProp:S},q=this.state.isHydrated?h(I):I[0];if(g)return l.default.createElement(v,{className:(r||"")+" gatsby-image-wrapper",style:(0,o.default)({position:"relative",overflow:"hidden",maxWidth:q.maxWidth?q.maxWidth+"px":null,maxHeight:q.maxHeight?q.maxHeight+"px":null},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(q.srcSet)},l.default.createElement(v,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/q.aspectRatio+"%"}}),N&&l.default.createElement(v,{"aria-hidden":!0,title:t,style:(0,o.default)({backgroundColor:N,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},C&&T)}),q.base64&&l.default.createElement(V,{ariaHidden:!0,ref:this.placeholderRef,src:q.base64,spreadProps:W,imageVariants:I,generateSources:x}),q.tracedSVG&&l.default.createElement(V,{ariaHidden:!0,ref:this.placeholderRef,src:q.tracedSVG,spreadProps:W,imageVariants:I,generateSources:R}),this.state.isVisible&&l.default.createElement("picture",null,w(I),l.default.createElement(z,{alt:a,title:t,sizes:q.sizes,src:q.src,crossOrigin:this.props.crossOrigin,srcSet:q.srcSet,style:H,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S,loading:E,draggable:L})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:k((0,o.default)({alt:a,title:t,loading:E},q,{imageVariants:I}))}}));if(m){var P=(0,o.default)({position:"relative",overflow:"hidden",display:"inline-block",width:q.width,height:q.height},n);return"inherit"===n.display&&delete P.display,l.default.createElement(v,{className:(r||"")+" gatsby-image-wrapper",style:P,ref:this.handleRef,key:"fixed-"+JSON.stringify(q.srcSet)},N&&l.default.createElement(v,{"aria-hidden":!0,title:t,style:(0,o.default)({backgroundColor:N,width:q.width,opacity:this.state.imgLoaded?0:1,height:q.height},C&&T)}),q.base64&&l.default.createElement(V,{ariaHidden:!0,ref:this.placeholderRef,src:q.base64,spreadProps:W,imageVariants:I,generateSources:x}),q.tracedSVG&&l.default.createElement(V,{ariaHidden:!0,ref:this.placeholderRef,src:q.tracedSVG,spreadProps:W,imageVariants:I,generateSources:R}),this.state.isVisible&&l.default.createElement("picture",null,w(I),l.default.createElement(z,{alt:a,title:t,width:q.width,height:q.height,sizes:q.sizes,src:q.src,crossOrigin:this.props.crossOrigin,srcSet:q.srcSet,style:H,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S,loading:E,draggable:L})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:k((0,o.default)({alt:a,title:t,loading:E},q,{imageVariants:I}))}}))}return null},t}(l.default.Component);C.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var H=u.default.shape({width:u.default.number.isRequired,height:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string}),N=u.default.shape({aspectRatio:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,sizes:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string,maxWidth:u.default.number,maxHeight:u.default.number});function T(e){return function(t,a,r){var i;if(!t.fixed&&!t.fluid)throw new Error("The prop `fluid` or `fixed` is marked as required in `"+r+"`, but their values are both `undefined`.");u.default.checkPropTypes(((i={})[a]=e,i),t,"prop",r)}}C.propTypes={resolutions:H,sizes:N,fixed:T(u.default.oneOfType([H,u.default.arrayOf(H)])),fluid:T(u.default.oneOfType([N,u.default.arrayOf(N)])),fadeIn:u.default.bool,durationFadeIn:u.default.number,title:u.default.string,alt:u.default.string,className:u.default.oneOfType([u.default.string,u.default.object]),critical:u.default.bool,crossOrigin:u.default.oneOfType([u.default.string,u.default.bool]),style:u.default.object,imgStyle:u.default.object,placeholderStyle:u.default.object,placeholderClassName:u.default.string,backgroundColor:u.default.oneOfType([u.default.string,u.default.bool]),onLoad:u.default.func,onError:u.default.func,onStartLoad:u.default.func,Tag:u.default.string,itemProp:u.default.string,loading:u.default.oneOf(["auto","lazy","eager"]),draggable:u.default.bool};var j=C;t.Z=j},1730:function(e,t,a){a.d(t,{Z:function(){return o}});var r=a(5785),i=a(7294),n=a(1597),s=a(6162);function d(e){var t=e.node,a=e.query,r=e.prefix,d=e.hideDate,o=e.yearOnly,l=new Date;l.setMonth(l.getMonth()-1);var u,c;if(t.date){var f=t.date.split(" "),p=f.pop();f[0]=f[0].slice(0,3),u=f.join(" ").slice(0,-1),c=p}return i.createElement(n.rU,{to:r?"/"+r+t.slug:t.slug,key:t.id,className:"post"},i.createElement("span",{className:"flex",style:{alignItems:"center"}},t.thumbnail&&i.createElement(s.Z,{fixed:t.thumbnail,style:{marginRight:"1rem",minWidth:"25px"}}),function(e,t){if(t){var a=new RegExp(t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),"i"),r=e.search(a);if(-1!==r){var n=r+t.length;return i.createElement("h3",null,e.slice(0,r),i.createElement("strong",{className:"highlighted"},e.slice(r,n)),e.slice(n))}return i.createElement("h3",null,e)}return i.createElement("h3",null,e)}(t.title,a),i.createElement("span",{className:"new-badge"},false)),i.createElement("div",null,u&&!d&&i.createElement("time",null,o?c:u)))}function o(e){var t=e.data,a=void 0===t?[]:t,n=e.showYears,s=e.query,o=e.prefix,l=e.hideDate,u=e.yearOnly,c=(0,i.useMemo)((function(){var e={};return a.forEach((function(t){var a,i=null===(a=t.date)||void 0===a?void 0:a.split(", ")[1];e[i]=[].concat((0,r.Z)(e[i]||[]),[t])})),e}),[a]),f=(0,i.useMemo)((function(){return Object.keys(c).reverse()}),[c]);return n?f.map((function(e){return i.createElement("section",{key:e},i.createElement("h2",null,e),i.createElement("div",{className:"posts"},c[e].map((function(e){return i.createElement(d,{key:e.id,node:e,query:s,prefix:o})}))))})):i.createElement("div",{className:"posts"},a.map((function(e){return i.createElement(d,{key:e.id,node:e,query:s,prefix:o,hideDate:l,yearOnly:u})})))}},2792:function(e,t,a){function r(e){return e.map((function(e){return{id:e.node.id,date:e.node.frontmatter.date,slug:e.node.frontmatter.slug,tags:e.node.frontmatter.tags,title:e.node.frontmatter.title,description:e.node.frontmatter.description}}))}function i(e){return e.replace(" ","-").toLowerCase()}a.d(t,{l:function(){return i},x:function(){return r}})}}]);
//# sourceMappingURL=bcfb02a80a786f9c193ddd5b49815501b118516d-48cb37bf987ee60f0bb5.js.map