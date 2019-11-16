<template>
  <div>
    <section id="search" style="margin-bottom:20px">
      <search />
    </section>
    <el-tabs :tab-position="tabPosition">
      <el-tab-pane v-for="item in sortList" :key="item._id" :label="item.title">
        <div
          style="padding:15px 0 5px; border-top: 1px solid #E5E5E5;border-bottom: 1px solid #E5E5E5"
        >{{item.title}}</div>
        <el-row>
          <el-col :span="8" v-for="e in item.datalist" :key="e.type" align="center">
            <!-- <el-image style="width:75px; height:75px; margin:20px 10px 0" :src="e.imgsrc" fit="cover"></el-image> -->
            <el-image
              style="width:75px; height:75px; margin:20px 10px 0"
              src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
              fit="cover"
            ></el-image>
            <span style="font-size: 12px;">{{e.type}}</span>
          </el-col>
        </el-row>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import search from "../pages/search.vue";
export default {
  components: {
    search
  },
  data() {
    return {
      tabPosition: "left",
      // sortList:[]
      sortList: [
        {
          _id: "5dce0380560c031b1e055c1a",
          title: "墙地材料",
          datalist: [
            {
              title: "瓷砖",
              imgsrc: "RW0S32WMDs_20180328_!!81820.png",
              type: "瓷砖"
            },
            {
              title: "地板",
              imgsrc: "rvuaQNo3Tb_20180328_!!86356.png",
              type: "地板"
            },
            {
              title: "壁纸",
              imgsrc: "Hv2kWCbM9s_20180328_!!65015.png",
              type: "壁纸"
            },
            {
              title: "墙布",
              imgsrc: "gePNDbQUq2_20180328_!!13389.png",
              type: "墙布"
            }
          ]
        },
        {
          _id: "5dce0380560c031b1e055c1b",
          title: "卫浴用品",
          datalist: [
            {
              title: "马桶",
              imgsrc: "YDa6HPu0Bk_20180403_!!34968.png",
              type: "马桶"
            },
            {
              title: "浴室柜",
              imgsrc: "EJm6uHwLaF_20180403_!!35472.png",
              type: "浴室柜"
            },
            {
              title: "花洒",
              imgsrc: "ZI64eLDn9I_20180403_!!23157.png",
              type: "花洒"
            },
            {
              title: "智能马桶",
              imgsrc: "lpwqyjW8Cl_20180403_!!14812.png",
              type: "智能马桶"
            },
            {
              title: "淋浴房",
              imgsrc: "4zkXAGnsVT_20180403_!!36856.png",
              type: "淋浴房"
            },
            {
              title: "浴缸",
              imgsrc: "v4VEU2aPIp_20180403_!!12393.png",
              type: "浴缸"
            },
            {
              title: "蹲便器",
              imgsrc: "GUPt43MU9h_20180403_!!78278.png",
              type: "蹲便器"
            },
            {
              title: "龙头",
              imgsrc: "xQjGT4QD6d_20180403_!!29674.png",
              type: "龙头"
            },
            {
              title: "挂件",
              imgsrc: "5TEkrsmqWT_20180403_!!77038.png",
              type: "挂件"
            },
            {
              title: "地漏",
              imgsrc: "M4d5WBPSMT_20180403_!!33980.png",
              type: "地漏"
            },
            {
              title: "洗面盆",
              imgsrc: "q9528i5nsD_20180403_!!16816.png",
              type: "洗面盆"
            },
            {
              title: "浴巾架",
              imgsrc: "tCVEFIeORZ_20180403_!!43480.png",
              type: "浴巾架"
            },
            {
              title: "卫浴套装",
              imgsrc: "iW9XUymbda_20180403_!!74307.png",
              type: "卫浴套装"
            }
          ]
        },
        {
          _id: "5dce0380560c031b1e055c1c",
          title: "灯饰照明",
          datalist: [
            {
              title: "吊灯",
              imgsrc: "t4xa7s3COl_20180331_!!92864.png",
              type: "吊灯"
            },
            {
              title: "吸顶灯",
              imgsrc: "D59hhNJr1c_20180331_!!68489.png",
              type: "吸顶灯"
            },
            {
              title: "台灯",
              imgsrc: "vnMcPxy0S3_20180331_!!39892.png",
              type: "台灯"
            },
            {
              title: "落地灯",
              imgsrc: "9bdVHk8vVN_20180331_!!19610.png",
              type: "落地灯"
            },
            {
              title: "射灯",
              imgsrc: "jxBqIQeduh_20180331_!!48795.png",
              type: "射灯"
            },
            {
              title: "壁灯",
              imgsrc: "hABEpqyQvI_20180331_!!20821.png",
              type: "壁灯"
            },
            {
              title: "灯具套装",
              imgsrc: "R7CRrYqUMm_20180403_!!72026.png",
              type: "灯具套装"
            }
          ]
        },
        {
          _id: "5dce0380560c031b1e055c1d",
          title: "厨房用品",
          datalist: [
            {
              title: "油烟机",
              imgsrc: "ELlUZEyG65_20180403_!!49336.png",
              type: "油烟机"
            },
            {
              title: "消毒柜",
              imgsrc: "lICQSuxj8E_20180403_!!88204.png",
              type: "消毒柜"
            },
            {
              title: "洗碗机",
              imgsrc: "liRvNOVORU_20180403_!!84270.png",
              type: "洗碗机"
            },
            {
              title: "冰箱",
              imgsrc: "5c469Oj8dA_20180403_!!18276.png",
              type: "冰箱"
            },
            {
              title: "烤箱",
              imgsrc: "fBe2R8ZyAq_20180403_!!37775.png",
              type: "烤箱"
            },
            {
              title: "厨房电器组合",
              imgsrc: "PBxWbEWU7f_20180403_!!13333.png",
              type: "厨房电器组合"
            },
            {
              title: "定制橱柜",
              imgsrc: "h6tjKWlxrt_20180403_!!30638.png",
              type: "定制橱柜"
            },
            {
              title: "拉手",
              imgsrc: "sDs5WqbRDh_20180403_!!25917.png",
              type: "拉手"
            },
            {
              title: "合页",
              imgsrc: "1caa29UXkp_20180403_!!65795.png",
              type: "合页"
            },
            {
              title: "气撑",
              imgsrc: "1NkpzqlHgQ_20180403_!!48511.png",
              type: "气撑"
            },
            {
              title: "轨道",
              imgsrc: "sEyVxl0NC9_20180403_!!14258.png",
              type: "轨道"
            },
            {
              title: "拉栏",
              imgsrc: "twG2VE2MYq_20180403_!!49660.png",
              type: "拉栏"
            },
            {
              title: "碗架",
              imgsrc: "PsDK1XBmO5_20180403_!!80730.png",
              type: "碗架"
            },
            {
              title: "灶具",
              imgsrc: "cK1NDu64GP_20180811_!!48209.png",
              type: "灶具"
            },
            {
              title: "集成灶",
              imgsrc: "u0ttxSvZve_20180811_!!22051.png",
              type: "集成灶"
            }
          ]
        },
        {
          _id: "5dce0380560c031b1e055c1e",
          title: "门/配件/五金",
          datalist: [
            {
              title: "室内门",
              imgsrc: "KdQ899ldaF_20180403_!!29545.png",
              type: "室内门"
            },
            {
              title: "钛美合金门",
              imgsrc: "KNVXWtjuad_20180403_!!94610.png",
              type: "钛美合金门"
            },
            {
              title: "锁具",
              imgsrc: "awoFBOWyI0_20180403_!!93927.png",
              type: "锁具"
            },
            {
              title: "合页",
              imgsrc: "vhCEVQVldg_20180403_!!50138.png",
              type: "合页"
            },
            {
              title: "门吸",
              imgsrc: "KzpIDIEDij_20180403_!!25801.png",
              type: "门吸"
            },
            {
              title: "挂勾",
              imgsrc: "216a9upl6l_20180403_!!34284.png",
              type: "挂勾"
            }
          ]
        },
        {
          _id: "5dce0380560c031b1e055c1f",
          title: "客厅",
          datalist: [
            {
              title: "沙发",
              imgsrc: "eughG3snEQ_20180403_!!34912.png",
              type: "沙发"
            },
            {
              title: "电视柜",
              imgsrc: "yW93lysgE1_20180403_!!85040.png",
              type: "电视柜"
            },
            {
              title: "茶几",
              imgsrc: "taE6r4UMzH_20180403_!!99084.png",
              type: "茶几"
            },
            {
              title: "酒柜",
              imgsrc: "jhjPbPobzh_20180403_!!23570.png",
              type: "酒柜"
            },
            {
              title: "鞋柜",
              imgsrc: "MUM235F0Qx_20180403_!!90803.png",
              type: "鞋柜"
            },
            {
              title: "休闲椅",
              imgsrc: "vnIhtxDSvA_20180403_!!61872.png",
              type: "休闲椅"
            },
            {
              title: "屏风",
              imgsrc: "NQjP6cyMCO_20180403_!!24611.png",
              type: "屏风"
            },
            {
              title: "玄关柜",
              imgsrc: "HLIwfmyZAl_20181019_!!81450.png",
              type: "玄关柜"
            },
            {
              title: "茶台",
              imgsrc: "T1SgUf3r6h_20181019_!!67751.png",
              type: "茶台"
            },
            {
              title: "花架",
              imgsrc: "zmd6uLetYY_20190329_!!84880.png",
              type: "花架"
            }
          ]
        },
        {
          _id: "5dce0380560c031b1e055c20",
          title: "卧室",
          datalist: [
            {
              title: "床",
              imgsrc: "7R986Iqzku_20180403_!!25061.png",
              type: "床"
            },
            {
              title: "床垫",
              imgsrc: "bjsfM0gNbz_20180403_!!58173.png",
              type: "床垫"
            },
            {
              title: "床头柜",
              imgsrc: "XPK26fSCUM_20180403_!!90452.png",
              type: "床头柜"
            },
            {
              title: "衣柜",
              imgsrc: "0xgblmCH5E_20180608_!!99260.png",
              type: "衣柜"
            },
            {
              title: "斗柜",
              imgsrc: "QOVUY5yNPu_20181019_!!63509.png",
              type: "斗柜"
            },
            {
              title: "床尾凳",
              imgsrc: "X2fQc5h8Dz_20181019_!!80749.png",
              type: "床尾凳"
            },
            {
              title: "梳妆台",
              imgsrc: "9YIlRMBfbV_20181019_!!31573.png",
              type: "梳妆台"
            },
            {
              title: "梳妆凳",
              imgsrc: "EjWhrcELcH_20181019_!!52431.png",
              type: "梳妆凳"
            }
          ]
        },
        {
          _id: "5dce0380560c031b1e055c21",
          title: "餐厅",
          datalist: [
            {
              title: "餐桌",
              imgsrc: "fHtJXxgBKY_20180403_!!44444.png",
              type: "餐桌"
            },
            {
              title: "餐椅",
              imgsrc: "5O9aNgGjHU_20180403_!!99325.png",
              type: "餐椅"
            },
            {
              title: "餐边柜",
              imgsrc: "qbFIYbG754_20180403_!!64419.png",
              type: "餐边柜"
            }
          ]
        },
        {
          _id: "5dce0380560c031b1e055c22",
          title: "书房",
          datalist: [
            {
              title: "书桌",
              imgsrc: "RgspeQXtDf_20180403_!!93423.png",
              type: "书桌"
            },
            {
              title: "书柜",
              imgsrc: "SSXkRgYkc5_20180608_!!34902.png",
              type: "书柜"
            },
            {
              title: "书椅",
              imgsrc: "kmij8TWICS_20180403_!!95021.png",
              type: "书椅"
            }
          ]
        },
        {
          _id: "5dce0380560c031b1e055c23",
          title: "儿童房",
          datalist: [
            {
              title: "儿童床",
              imgsrc: "7Z26AlonP3_20180403_!!84019.png",
              type: "儿童床"
            },
            {
              title: "儿童书桌",
              imgsrc: "7XutQMI8W7_20180403_!!71993.png",
              type: "儿童书桌"
            },
            {
              title: "儿童衣柜",
              imgsrc: "OGCZ8KIe7P_20180608_!!19930.png",
              type: "儿童衣柜"
            },
            {
              title: "儿童书椅",
              imgsrc: "bxX7GmsrKV_20180403_!!74277.png",
              type: "儿童书椅"
            }
          ]
        },
        {
          _id: "5dce0380560c031b1e055c24",
          title: "红木馆",
          datalist: [
            {
              title: "红木家具",
              imgsrc: "CRGLpXwFJz_20180403_!!41713.png",
              type: "红木家具"
            }
          ]
        }
      ]
    };
  },
  methods: {
    // async getSortList() {
    //   // 发送请求拿数据
    //   let { data } = await this.$axios.get(
    //     "http://10.3.136.139:1910/home/sorts"
    //   );
    //   this.sortList = data.data;
    //   console.log(data.data);
    // }
  },
  created() {
    // this.getSortList();
  }
};
</script>

<style lang="scss">
@function vw($px) {
  @return ($px / 750) * 100vw;
}
</style>