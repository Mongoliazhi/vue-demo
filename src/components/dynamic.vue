<template>
  <div class="dynamic">
    <h1>{{ msg }}</h1>
    <div>
      <p><span>经度：</span><i>{{jingdu}}</i></p>
      <p><span>纬度：</span><i>{{weidu}}</i></p>
    </div>
    <div class="map">
      <div id="BaiduMap"></div>
      <button @click="map_btn" class="map_btn" type="button">重新定位</button>
    </div>
  </div>
</template>


<script>
  export default {
    name: 'dynamic',
    data () {
      return {
        msg: '百度地图定位',
        jingdu: 1,
        weidu: 1
      }
    },
    methods: {
      map_btn(){

      },
    },
    mounted(){
      var self = this;
      var myposition;
      //百度地图
      // 百度地图API功能
      var map = new BMap.Map("BaiduMap");
      var point = new BMap.Point(116.331398, 39.897445);
      map.centerAndZoom(point, 12);

      var geolocation = new BMap.Geolocation();
      geolocation.getCurrentPosition(function (r) {
        console.log(this.getStatus())
        if (this.getStatus() == BMAP_STATUS_SUCCESS) {
//          console.log(r)

          var mk = new BMap.Marker(r.point);
          map.addOverlay(mk);
          map.panTo(r.point);
          self.jingdu = r.point.lng;
          self.weidu = r.point.lat;
          myposition = new BMap.Point(r.point.lng, r.point.lat);

//          if (r.accuracy == null) {
//            alert('获取定位失败');
//            //用户决绝地理位置授权
//            return;
//          }

        }
        else {
          alert("2")
          alert('failed' + this.getStatus());
        }
      }, {enableHighAccuracy: true})

    }
  }


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .map {
    width: 100%;
    height: 400px;
    border: 1px solid #ccc;
  }

  #BaiduMap {
    width: 100%;
    height: 100%;
  }

  .map_btn {
    margin-top: 20px;
    width: 80%;
    height: 45px;
    line-height: 45px;
    background-color: #209aff;
    color: #fff;
    border: none;
    border-radius: 8px;
  }
</style>
