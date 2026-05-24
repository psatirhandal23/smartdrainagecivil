window.addEventListener('load',()=>{

const particlesMesh = new THREE.Points(
  particlesGeometry,
  particlesMaterial
)

scene.add(particlesMesh)
camera.position.z = 3

function animate(){
  requestAnimationFrame(animate)

  particlesMesh.rotation.y += 0.0008
  particlesMesh.rotation.x += 0.0003

  renderer.render(scene,camera)
}

animate()

window.addEventListener('resize',()=>{
  renderer.setSize(window.innerWidth,window.innerHeight)
  camera.aspect = window.innerWidth/window.innerHeight
  camera.updateProjectionMatrix()
})

const ctx = document.getElementById('analyticsChart')

new Chart(ctx,{
  type:'line',
  data:{
    labels:['00','04','08','12','16','20'],
    datasets:[{
      label:'AI Infrastructure',
      data:[12,19,14,25,22,30],
      borderColor:'#00d9ff',
      backgroundColor:'rgba(0,217,255,.1)',
      tension:0.4,
      fill:true
    }]
  },
  options:{
    plugins:{
      legend:{
        labels:{color:'white'}
      }
    },
    scales:{
      y:{
        ticks:{color:'white'}
      },
      x:{
        ticks:{color:'white'}
      }
    }
  }
})

const cartBtn = document.getElementById('cartBtn')
const wishlistBtn = document.getElementById('wishlistBtn')

const cartSidebar = document.getElementById('cartSidebar')
const wishlistSidebar = document.getElementById('wishlistSidebar')

cartBtn.addEventListener('click',()=>{
  cartSidebar.classList.toggle('active')
})

wishlistBtn.addEventListener('click',()=>{
  wishlistSidebar.classList.toggle('active')
})
