!function(e){function t(i){if(n[i])return n[i].exports;var o=n[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,i){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:i})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=27)}({0:function(e,t,n){"use strict";!function(){function e(e){this.object=e,this.target=new THREE.Vector3,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.25;var t,n,i=this,o=0,a=0,r=1,s=new THREE.Vector3,c=!1;this.getPolarAngle=function(){return n},this.getAzimuthalAngle=function(){return t},this.rotateLeft=function(e){a-=e},this.rotateUp=function(e){o-=e},this.panLeft=function(){var e=new THREE.Vector3;return function(t){var n=this.object.matrix.elements;e.set(n[0],n[1],n[2]),e.multiplyScalar(-t),s.add(e)}}(),this.panUp=function(){var e=new THREE.Vector3;return function(t){var n=this.object.matrix.elements;e.set(n[4],n[5],n[6]),e.multiplyScalar(t),s.add(e)}}(),this.pan=function(e,t,n,o){if(i.object instanceof THREE.PerspectiveCamera){var a=i.object.position,r=a.clone().sub(i.target),s=r.length();s*=Math.tan(i.object.fov/2*Math.PI/180),i.panLeft(2*e*s/o),i.panUp(2*t*s/o)}else i.object instanceof THREE.OrthographicCamera?(i.panLeft(e*(i.object.right-i.object.left)/n),i.panUp(t*(i.object.top-i.object.bottom)/o)):console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled.")},this.dollyIn=function(e){i.object instanceof THREE.PerspectiveCamera?r/=e:i.object instanceof THREE.OrthographicCamera?(i.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom*e)),i.object.updateProjectionMatrix(),c=!0):console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.")},this.dollyOut=function(e){i.object instanceof THREE.PerspectiveCamera?r*=e:i.object instanceof THREE.OrthographicCamera?(i.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/e)),i.object.updateProjectionMatrix(),c=!0):console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.")},this.update=function(){var i=new THREE.Vector3,l=(new THREE.Quaternion).setFromUnitVectors(e.up,new THREE.Vector3(0,1,0)),h=l.clone().inverse(),u=new THREE.Vector3,d=new THREE.Quaternion;return function(){var e=this.object.position;i.copy(e).sub(this.target),i.applyQuaternion(l),t=Math.atan2(i.x,i.z),n=Math.atan2(Math.sqrt(i.x*i.x+i.z*i.z),i.y),t+=a,n+=o,t=Math.max(this.minAzimuthAngle,Math.min(this.maxAzimuthAngle,t)),n=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,n)),n=Math.max(1e-6,Math.min(Math.PI-1e-6,n));var m=i.length()*r;return m=Math.max(this.minDistance,Math.min(this.maxDistance,m)),this.target.add(s),i.x=m*Math.sin(n)*Math.sin(t),i.y=m*Math.cos(n),i.z=m*Math.sin(n)*Math.cos(t),i.applyQuaternion(h),e.copy(this.target).add(i),this.object.lookAt(this.target),!0===this.enableDamping?(a*=1-this.dampingFactor,o*=1-this.dampingFactor):(a=0,o=0),r=1,s.set(0,0,0),!!(c||u.distanceToSquared(this.object.position)>1e-6||8*(1-d.dot(this.object.quaternion))>1e-6)&&(u.copy(this.object.position),d.copy(this.object.quaternion),c=!1,!0)}}()}THREE.OrbitControls=function(t,n){function i(e,t){var n=p.domElement===document?p.domElement.body:p.domElement;f.pan(e,t,n.clientWidth,n.clientHeight)}function o(){return 2*Math.PI/60/60*p.autoRotateSpeed}function a(){return Math.pow(.95,p.zoomSpeed)}function r(e){if(!1!==p.enabled){if(e.preventDefault(),e.button===p.mouseButtons.ORBIT){if(!1===p.enableRotate)return;M=C.ROTATE,v.set(e.clientX,e.clientY)}else if(e.button===p.mouseButtons.ZOOM){if(!1===p.enableZoom)return;M=C.DOLLY,y.set(e.clientX,e.clientY)}else if(e.button===p.mouseButtons.PAN){if(!1===p.enablePan)return;M=C.PAN,T.set(e.clientX,e.clientY)}M!==C.NONE&&(document.addEventListener("mousemove",s,!1),document.addEventListener("mouseup",c,!1),p.dispatchEvent(O))}}function s(e){if(!1!==p.enabled){e.preventDefault();var t=p.domElement===document?p.domElement.body:p.domElement;if(M===C.ROTATE){if(!1===p.enableRotate)return;g.set(e.clientX,e.clientY),b.subVectors(g,v),f.rotateLeft(2*Math.PI*b.x/t.clientWidth*p.rotateSpeed),f.rotateUp(2*Math.PI*b.y/t.clientHeight*p.rotateSpeed),v.copy(g)}else if(M===C.DOLLY){if(!1===p.enableZoom)return;w.set(e.clientX,e.clientY),P.subVectors(w,y),P.y>0?f.dollyIn(a()):P.y<0&&f.dollyOut(a()),y.copy(w)}else if(M===C.PAN){if(!1===p.enablePan)return;R.set(e.clientX,e.clientY),H.subVectors(R,T),i(H.x,H.y),T.copy(R)}M!==C.NONE&&p.update()}}function c(){!1!==p.enabled&&(document.removeEventListener("mousemove",s,!1),document.removeEventListener("mouseup",c,!1),p.dispatchEvent(A),M=C.NONE)}function l(e){if(!1!==p.enabled&&!1!==p.enableZoom&&M===C.NONE){e.preventDefault(),e.stopPropagation();var t=0;void 0!==e.wheelDelta?t=e.wheelDelta:void 0!==e.detail&&(t=-e.detail),t>0?f.dollyOut(a()):t<0&&f.dollyIn(a()),p.update(),p.dispatchEvent(O),p.dispatchEvent(A)}}function h(e){if(!1!==p.enabled&&!1!==p.enableKeys&&!1!==p.enablePan)switch(e.keyCode){case p.keys.UP:i(0,p.keyPanSpeed),p.update();break;case p.keys.BOTTOM:i(0,-p.keyPanSpeed),p.update();break;case p.keys.LEFT:i(p.keyPanSpeed,0),p.update();break;case p.keys.RIGHT:i(-p.keyPanSpeed,0),p.update()}}function u(e){if(!1!==p.enabled){switch(e.touches.length){case 1:if(!1===p.enableRotate)return;M=C.TOUCH_ROTATE,v.set(e.touches[0].pageX,e.touches[0].pageY);break;case 2:if(!1===p.enableZoom)return;M=C.TOUCH_DOLLY;var t=e.touches[0].pageX-e.touches[1].pageX,n=e.touches[0].pageY-e.touches[1].pageY,i=Math.sqrt(t*t+n*n);y.set(0,i);break;case 3:if(!1===p.enablePan)return;M=C.TOUCH_PAN,T.set(e.touches[0].pageX,e.touches[0].pageY);break;default:M=C.NONE}M!==C.NONE&&p.dispatchEvent(O)}}function d(e){if(!1!==p.enabled){e.preventDefault(),e.stopPropagation();var t=p.domElement===document?p.domElement.body:p.domElement;switch(e.touches.length){case 1:if(!1===p.enableRotate)return;if(M!==C.TOUCH_ROTATE)return;g.set(e.touches[0].pageX,e.touches[0].pageY),b.subVectors(g,v),f.rotateLeft(2*Math.PI*b.x/t.clientWidth*p.rotateSpeed),f.rotateUp(2*Math.PI*b.y/t.clientHeight*p.rotateSpeed),v.copy(g),p.update();break;case 2:if(!1===p.enableZoom)return;if(M!==C.TOUCH_DOLLY)return;var n=e.touches[0].pageX-e.touches[1].pageX,o=e.touches[0].pageY-e.touches[1].pageY,r=Math.sqrt(n*n+o*o);w.set(0,r),P.subVectors(w,y),P.y>0?f.dollyOut(a()):P.y<0&&f.dollyIn(a()),y.copy(w),p.update();break;case 3:if(!1===p.enablePan)return;if(M!==C.TOUCH_PAN)return;R.set(e.touches[0].pageX,e.touches[0].pageY),H.subVectors(R,T),i(H.x,H.y),T.copy(R),p.update();break;default:M=C.NONE}}}function m(){!1!==p.enabled&&(p.dispatchEvent(A),M=C.NONE)}function E(e){e.preventDefault()}var f=new e(t);this.domElement=void 0!==n?n:document,Object.defineProperty(this,"constraint",{get:function(){return f}}),this.getPolarAngle=function(){return f.getPolarAngle()},this.getAzimuthalAngle=function(){return f.getAzimuthalAngle()},this.enabled=!0,this.center=this.target,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.enableKeys=!0,this.keys={LEFT:37,UP:38,RIGHT:39,BOTTOM:40},this.mouseButtons={ORBIT:THREE.MOUSE.LEFT,ZOOM:THREE.MOUSE.MIDDLE,PAN:THREE.MOUSE.RIGHT};var p=this,v=new THREE.Vector2,g=new THREE.Vector2,b=new THREE.Vector2,T=new THREE.Vector2,R=new THREE.Vector2,H=new THREE.Vector2,y=new THREE.Vector2,w=new THREE.Vector2,P=new THREE.Vector2,C={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_DOLLY:4,TOUCH_PAN:5},M=C.NONE;this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom;var x={type:"change"},O={type:"start"},A={type:"end"};this.update=function(){this.autoRotate&&M===C.NONE&&f.rotateLeft(o()),!0===f.update()&&this.dispatchEvent(x)},this.reset=function(){M=C.NONE,this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(x),this.update()},this.dispose=function(){this.domElement.removeEventListener("contextmenu",E,!1),this.domElement.removeEventListener("mousedown",r,!1),this.domElement.removeEventListener("mousewheel",l,!1),this.domElement.removeEventListener("MozMousePixelScroll",l,!1),this.domElement.removeEventListener("touchstart",u,!1),this.domElement.removeEventListener("touchend",m,!1),this.domElement.removeEventListener("touchmove",d,!1),document.removeEventListener("mousemove",s,!1),document.removeEventListener("mouseup",c,!1),window.removeEventListener("keydown",h,!1)},this.domElement.addEventListener("contextmenu",E,!1),this.domElement.addEventListener("mousedown",r,!1),this.domElement.addEventListener("mousewheel",l,!1),this.domElement.addEventListener("MozMousePixelScroll",l,!1),this.domElement.addEventListener("touchstart",u,!1),this.domElement.addEventListener("touchend",m,!1),this.domElement.addEventListener("touchmove",d,!1),window.addEventListener("keydown",h,!1),this.update()},THREE.OrbitControls.prototype=Object.create(THREE.EventDispatcher.prototype),THREE.OrbitControls.prototype.constructor=THREE.OrbitControls,Object.defineProperties(THREE.OrbitControls.prototype,{object:{get:function(){return this.constraint.object}},target:{get:function(){return this.constraint.target},set:function(e){console.warn("THREE.OrbitControls: target is now immutable. Use target.set() instead."),this.constraint.target.copy(e)}},minDistance:{get:function(){return this.constraint.minDistance},set:function(e){this.constraint.minDistance=e}},maxDistance:{get:function(){return this.constraint.maxDistance},set:function(e){this.constraint.maxDistance=e}},minZoom:{get:function(){return this.constraint.minZoom},set:function(e){this.constraint.minZoom=e}},maxZoom:{get:function(){return this.constraint.maxZoom},set:function(e){this.constraint.maxZoom=e}},minPolarAngle:{get:function(){return this.constraint.minPolarAngle},set:function(e){this.constraint.minPolarAngle=e}},maxPolarAngle:{get:function(){return this.constraint.maxPolarAngle},set:function(e){this.constraint.maxPolarAngle=e}},minAzimuthAngle:{get:function(){return this.constraint.minAzimuthAngle},set:function(e){this.constraint.minAzimuthAngle=e}},maxAzimuthAngle:{get:function(){return this.constraint.maxAzimuthAngle},set:function(e){this.constraint.maxAzimuthAngle=e}},enableDamping:{get:function(){return this.constraint.enableDamping},set:function(e){this.constraint.enableDamping=e}},dampingFactor:{get:function(){return this.constraint.dampingFactor},set:function(e){this.constraint.dampingFactor=e}},noZoom:{get:function(){return console.warn("THREE.OrbitControls: .noZoom has been deprecated. Use .enableZoom instead."),!this.enableZoom},set:function(e){console.warn("THREE.OrbitControls: .noZoom has been deprecated. Use .enableZoom instead."),this.enableZoom=!e}},noRotate:{get:function(){return console.warn("THREE.OrbitControls: .noRotate has been deprecated. Use .enableRotate instead."),!this.enableRotate},set:function(e){console.warn("THREE.OrbitControls: .noRotate has been deprecated. Use .enableRotate instead."),this.enableRotate=!e}},noPan:{get:function(){return console.warn("THREE.OrbitControls: .noPan has been deprecated. Use .enablePan instead."),!this.enablePan},set:function(e){console.warn("THREE.OrbitControls: .noPan has been deprecated. Use .enablePan instead."),this.enablePan=!e}},noKeys:{get:function(){return console.warn("THREE.OrbitControls: .noKeys has been deprecated. Use .enableKeys instead."),!this.enableKeys},set:function(e){console.warn("THREE.OrbitControls: .noKeys has been deprecated. Use .enableKeys instead."),this.enableKeys=!e}},staticMoving:{get:function(){return console.warn("THREE.OrbitControls: .staticMoving has been deprecated. Use .enableDamping instead."),!this.constraint.enableDamping},set:function(e){console.warn("THREE.OrbitControls: .staticMoving has been deprecated. Use .enableDamping instead."),this.constraint.enableDamping=!e}},dynamicDampingFactor:{get:function(){return console.warn("THREE.OrbitControls: .dynamicDampingFactor has been renamed. Use .dampingFactor instead."),this.constraint.dampingFactor},set:function(e){console.warn("THREE.OrbitControls: .dynamicDampingFactor has been renamed. Use .dampingFactor instead."),this.constraint.dampingFactor=e}}})}()},17:function(e,t,n){"use strict";THREE.AdditiveBlendShader={uniforms:{tDiffuse1:{type:"t",value:null},tDiffuse2:{type:"t",value:null}},vertexShader:["varying vec2 vUv;","void main() {","vUv = uv;","gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );","}"].join("\n"),fragmentShader:["uniform sampler2D tDiffuse1;","uniform sampler2D tDiffuse2;","varying vec2 vUv;","void main() {","vec4 texel1 = texture2D( tDiffuse1, vUv );","vec4 texel2 = texture2D( tDiffuse2, vUv );","gl_FragColor = texel1 + texel2;","}"].join("\n")}},27:function(e,t,n){"use strict";function i(){requestAnimationFrame(i),a(),o()}function o(){h.update()}function a(){m.render(),E.render()}n(0),n(8),n(17),n(7),n(5),n(6),n(4);var r,s,c,l,h,u,d,m,E;new THREE.Clock;!function(){s=new THREE.Scene;var e=window.innerWidth,t=window.innerHeight,n=e/t;c=new THREE.PerspectiveCamera(45,n,.1,2e4),s.add(c),c.position.set(0,150,400),c.lookAt(s.position),l=new THREE.WebGLRenderer({antialias:!0}),l.setSize(e,t),r=document.body,r.appendChild(l.domElement),h=new THREE.OrbitControls(c,l.domElement);var i=new THREE.PointLight(16777215);i.position.set(0,250,0),s.add(i);var o=new THREE.ShaderMaterial({uniforms:{c:{type:"f",value:.5},p:{type:"f",value:4}},vertexShader:"varying vec3 vNormal;void main() {    vNormal = normalize( normalMatrix * normal );    gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );}",fragmentShader:"uniform float c;uniform float p;varying vec3 vNormal;void main(){\tfloat intensity = pow( c - dot( vNormal, vec3( 0.0, 0.0, 1.0 ) ), p ); \tgl_FragColor = vec4( 1.0, 1.0, 1.0, 1.0 ) * intensity;}"}),a=new THREE.SphereGeometry(100,32,16),f=THREE.ImageUtils.loadTexture("img/diffuse.jpg"),p=new THREE.MeshBasicMaterial({map:f}),v=new THREE.Mesh(a,p);s.add(v),u=new THREE.Scene,d=new THREE.PerspectiveCamera(45,n,.1,2e4),d.position.copy(c.position),d.rotation.copy(c.rotation),u.add(d);var g=new THREE.Mesh(a.clone(),o);g.scale.x=g.scale.y=g.scale.z=1.2,g.material.side=THREE.BackSide,u.add(g);var b=new THREE.MeshBasicMaterial({color:0}),T=new THREE.Mesh(a.clone(),b);T.scale.x=T.scale.y=T.scale.z=1,u.add(T);var R={minFilter:THREE.LinearFilter,magFilter:THREE.LinearFilter,format:THREE.RGBFormat,stencilBuffer:!1},H=new THREE.WebGLRenderTarget(e,t,R);m=new THREE.EffectComposer(l,H);var y=new THREE.RenderPass(u,d);m.addPass(y),E=new THREE.EffectComposer(l,H);var w=new THREE.RenderPass(s,c);E.addPass(w);var P=new THREE.ShaderPass(THREE.AdditiveBlendShader,"tDiffuse1");P.uniforms.tDiffuse2.value=m.renderTarget2,P.renderToScreen=!0,E.addPass(P),l.autoClear=!1,l.setClearColor(0,0)}(),i()},4:function(e,t,n){"use strict";THREE.EffectComposer=function(e,t){if(this.renderer=e,void 0===t){var n=e.getPixelRatio(),i=Math.floor(e.context.canvas.width/n)||1,o=Math.floor(e.context.canvas.height/n)||1,a={minFilter:THREE.LinearFilter,magFilter:THREE.LinearFilter,format:THREE.RGBFormat,stencilBuffer:!1};t=new THREE.WebGLRenderTarget(i,o,a)}this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.passes=[],void 0===THREE.CopyShader&&console.error("THREE.EffectComposer relies on THREE.CopyShader"),this.copyPass=new THREE.ShaderPass(THREE.CopyShader)},THREE.EffectComposer.prototype={swapBuffers:function(){var e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e},addPass:function(e){this.passes.push(e)},insertPass:function(e,t){this.passes.splice(t,0,e)},render:function(e){this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2;var t,n,i=!1,o=this.passes.length;for(n=0;n<o;n++)if(t=this.passes[n],t.enabled){if(t.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),t.needsSwap){if(i){var a=this.renderer.context;a.stencilFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),a.stencilFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}t instanceof THREE.MaskPass?i=!0:t instanceof THREE.ClearMaskPass&&(i=!1)}},reset:function(e){if(void 0===e){e=this.renderTarget1.clone();var t=this.renderer.getPixelRatio();e.width=Math.floor(this.renderer.context.canvas.width/t),e.height=Math.floor(this.renderer.context.canvas.height/t)}this.renderTarget1.dispose(),this.renderTarget1=e,this.renderTarget2.dispose(),this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2},setSize:function(e,t){this.renderTarget1.setSize(e,t),this.renderTarget2.setSize(e,t)}}},5:function(e,t,n){"use strict";THREE.MaskPass=function(e,t){this.scene=e,this.camera=t,this.enabled=!0,this.clear=!0,this.needsSwap=!1,this.inverse=!1},THREE.MaskPass.prototype={render:function(e,t,n,i){var o=e.context;o.colorMask(!1,!1,!1,!1),o.depthMask(!1);var a,r;this.inverse?(a=0,r=1):(a=1,r=0),o.enable(o.STENCIL_TEST),o.stencilOp(o.REPLACE,o.REPLACE,o.REPLACE),o.stencilFunc(o.ALWAYS,a,4294967295),o.clearStencil(r),e.render(this.scene,this.camera,n,this.clear),e.render(this.scene,this.camera,t,this.clear),o.colorMask(!0,!0,!0,!0),o.depthMask(!0),o.stencilFunc(o.EQUAL,1,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP)}},THREE.ClearMaskPass=function(){this.enabled=!0},THREE.ClearMaskPass.prototype={render:function(e,t,n,i){var o=e.context;o.disable(o.STENCIL_TEST)}}},6:function(e,t,n){"use strict";THREE.RenderPass=function(e,t,n,i,o){this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=void 0!==o?o:1,this.oldClearColor=new THREE.Color,this.oldClearAlpha=1,this.enabled=!0,this.clear=!0,this.needsSwap=!1},THREE.RenderPass.prototype={render:function(e,t,n,i){this.scene.overrideMaterial=this.overrideMaterial,this.clearColor&&(this.oldClearColor.copy(e.getClearColor()),this.oldClearAlpha=e.getClearAlpha(),e.setClearColor(this.clearColor,this.clearAlpha)),e.render(this.scene,this.camera,n,this.clear),this.clearColor&&e.setClearColor(this.oldClearColor,this.oldClearAlpha),this.scene.overrideMaterial=null}}},7:function(e,t,n){"use strict";THREE.ShaderPass=function(e,t){this.textureID=void 0!==t?t:"tDiffuse",this.uniforms=THREE.UniformsUtils.clone(e.uniforms),this.material=new THREE.ShaderMaterial({defines:e.defines||{},uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.renderToScreen=!1,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.camera=new THREE.OrthographicCamera(-1,1,1,-1,0,1),this.scene=new THREE.Scene,this.quad=new THREE.Mesh(new THREE.PlaneBufferGeometry(2,2),null),this.scene.add(this.quad)},THREE.ShaderPass.prototype={render:function(e,t,n,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n),this.quad.material=this.material,this.renderToScreen?e.render(this.scene,this.camera):e.render(this.scene,this.camera,t,this.clear)}}},8:function(e,t,n){"use strict";THREE.CopyShader={uniforms:{tDiffuse:{type:"t",value:null},opacity:{type:"f",value:1}},vertexShader:["varying vec2 vUv;","void main() {","vUv = uv;","gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );","}"].join("\n"),fragmentShader:["uniform float opacity;","uniform sampler2D tDiffuse;","varying vec2 vUv;","void main() {","vec4 texel = texture2D( tDiffuse, vUv );","gl_FragColor = opacity * texel;","}"].join("\n")}}});