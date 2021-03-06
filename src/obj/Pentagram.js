
export default class Pentagram extends THREE.Object3D {
	constructor(options) {
	    super()
	    options ? true : options = {}
	    options.radius ? true : options.radius = 10;
	    options.fixed ? true : options.fixed = new THREE.Vector3(7, 0, 0);
	    options.height ? true : options.height = 3
	    options.color ? true : options.color = 0x156289
	    this.position.copy(options.fixed);

		var geometry = new THREE.Geometry();
		var radius = options.radius
		var top = new THREE.Vector3(options.height/2, 0, 0);
		var bottom = new THREE.Vector3(-options.height/2, 0, 0);

	    for(let i =0; i<5; i++) {
	    	let euler = 2*i*Math.PI/5
	    	geometry.vertices.push(new THREE.Vector3(0, radius*Math.cos(euler), radius*Math.sin(euler)))
	    }
	    for(let i=0; i<5; i++) {
	    	let euler = (2*i+1)*Math.PI/5
	    	geometry.vertices.push(new THREE.Vector3(0, radius*Math.cos(euler)/2, radius*Math.sin(euler)/2))	
	    }
	    geometry.vertices.push(top)
	    geometry.vertices.push(bottom)

	    for(let i=0; i<5; i++) {
	    	geometry.faces.push(new THREE.Face3(i, 10, (i)%5 + 5))
	    	geometry.faces.push(new THREE.Face3(i, 10, (i+4)%5 + 5))
	    	geometry.faces.push(new THREE.Face3(i, 11, (i)%5 + 5))
	    	geometry.faces.push(new THREE.Face3(i, 11, (i+4)%5 + 5))
	    }

	    geometry.computeBoundingSphere();

	    var material = new THREE.MeshPhongMaterial({
	    	color: options.color, 
	    	side: THREE.DoubleSide,
	    	emissive: 0x072534,
	    	shading: THREE.FlatShading
	    });
	    this.add(new THREE.Mesh(geometry, material))
	    material = new THREE.MeshPhongMaterial({
	    	color: 0xffffff, 
	    	emissive: 0xffffff,
	    	wireframe: true
	    });
	    // this.add(new THREE.Mesh(geometry, material))

	}	
}