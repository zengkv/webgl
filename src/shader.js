/* global THREE */
import './obj/OrbitControls'
import Gird from "./obj/Gird"

class App {
	constructor() {
		this.animate = this.animate.bind(this);
		this.scene = new THREE.Scene();
		this.camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
		this.renderer = new THREE.WebGLRenderer();
		this.renderer.setClearColor( 0x000000 );
		this.renderer.setSize(window.innerWidth, window.innerHeight);
		document.body.appendChild(this.renderer.domElement);	
		this.controls = new THREE.OrbitControls(this.camera, this.renderer.domElement)

		this.initScene();	

		this.animate();
	}

	initScene() {
		var geometry = new THREE.SphereBufferGeometry(10, 128, 32);
		var vShader = require("./myshaders/test.vert");
		var fShader = require("./myshaders/test.frag");
		var loader = new THREE.TextureLoader();
		this.uniforms = {
			amplitude: {
				type: "f",
				value: 0.0
			},
			tDiffuse: {
				type: "t",
				value: loader.load("img/diffuse.jpg")
			}
		}
		var shader = new THREE.ShaderMaterial({
			uniforms: this.uniforms,
			vertexShader: vShader, 
			fragmentShader: fShader 
		});
		this.cube = new THREE.Mesh(geometry, shader);

		this.scene.add(this.cube);

		this.displacement = new Float32Array(geometry.attributes.position.count);
		// this.noise = new Float32Array(geometry.attributes.position.count);
		for(var i = 0; i<this.displacement.length; i++) {
			this.displacement[i] = Math.random()*2;
			// this.noise[i] = Math.random();
		}
		geometry.addAttribute("displacement", new THREE.BufferAttribute(this.displacement, 1));
		// var directionalLight = new THREE.DirectionalLight( 0xffffff, 1 );
	 //    directionalLight.position.set( 0, 0, 10 );
	 //    this.scene.add( directionalLight );

		this.camera.position.set(0, 0, 30);
		this.frame = 0;
		this.scene.add(new Gird());

	}


	animate() {
	    requestAnimationFrame(this.animate)
	    // for(var i = 0; i<this.displacement.length; i++) {
	    // 	this.displacement[i] += this.noise[i]/10;
	    // 	if(this.displacement[i] >= 1 || this.displacement[i] <= -1) {
	    // 		this.noise[i] *= -1;
	    // 	}
	    // }
	    // this.cube.geometry.attributes.displacement.needsUpdate = true;
	    this.uniforms.amplitude.value = Math.sin(this.frame);
	    this.frame += 0.05;

	    this.renderer.render(this.scene, this.camera)
	}
}

new App();