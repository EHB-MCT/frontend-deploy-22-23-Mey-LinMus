const mesh = new THREE.Mesh();
mesh.position.set(1, 2, 3);
mesh.rotation.x = 0.5;
mesh.geometry = new THREE.BoxGeometry(1, 1, 1);
mesh.material = new THREE.MeshBasicMaterial({ color: "blue" });
scene.add(mesh);
