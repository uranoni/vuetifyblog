<template>
  <v-container fluid>
    <v-app light>
    <v-content>
      <v-container>
        <v-layout row wrap align-center>
          <v-flex xs12 md4>
            <div class="text-xs-center">
              <v-avatar size="125px">
                <img
                  class="img-circle elevation-7 mb-1"
                  src="../assets/adorable-animal-blur-825949.jpg"
                >
              </v-avatar>
              <div class="headline">Kevin <span style="font-weight:bold">web programming</span></div>
              <div class="subheading text-xs-center grey--text pt-1 pb-3">profile</div>
              <v-layout justify-space-between>
                <a href="" class="body-2">Home</a>
                <a href="" class="body-2">About</a>
                <a href="" class="body-2">Github</a>
                <a href="" class="body-2">Other</a>
              </v-layout>
            </div>
          </v-flex>
          <v-flex xs12 md5 offset-md2>
            <div v-for="post in posts" :key="post.title">
              <v-card class="my-3" hover>
                <v-card-media
                  class="white--text"
                  height="170px"
                  :src="post.imgUrl"
                >
                  <v-container fill-height fluid>
                    <v-layout>
                      <v-flex xs12 align-end d-flex>
                        <span class="headline"></span>
                      </v-flex>
                    </v-layout>
                  </v-container>
                </v-card-media>
                <v-card-text>
                      {{post.title}}
                </v-card-text>
                <v-card-actions>
                  <v-btn icon class="red--text">
                    <v-icon medium>fa-reddit</v-icon>
                  </v-btn>
                  <v-btn icon class="light-blue--text">
                    <v-icon medium>fa-twitter</v-icon>
                  </v-btn>
                  <v-btn icon class="blue--text text--darken-4">
                    <v-icon medium>fa-facebook</v-icon>
                  </v-btn>
                  <v-spacer></v-spacer>
                  <!-- 原本按鈕設定 -->
                  <!-- <v-btn flat class="blue--text">Read More</v-btn> -->
                  <v-btn color="primary" dark @click.native.stop="dialog = true">Open Dialog</v-btn>
                        <!-- 內容設定 -->
                        <v-dialog v-model="dialog" max-width="290">
                            <v-card>
                              <v-card-title class="headline">{{post.title}}</v-card-title>
                              <!-- <v-card-text>Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.</v-card-text> -->
                                     <!-- 卡片內容文字 -->
                                     <v-card color="grey lighten-4" flat>
                                                <v-card-text>
                                                  <v-subheader>Light Theme</v-subheader>
                                                  <v-container fluid>
                                                    <v-layout row>
                                                      <v-flex xs12>
                                                        <v-text-field
                                                          name="input-1"
                                                          label="Label Text"
                                                          textarea
                                                          v-model="post.content"
                                                        ></v-text-field>
                                                      </v-flex>
                                                    </v-layout>
                                                  </v-container>
                                                </v-card-text>
                                              </v-card>
                              <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn color="green darken-1" flat="flat" @click.native="dialog = false">修改</v-btn>
                                <v-btn color="green darken-1" flat="flat" @click.native="dialog = false">刪除</v-btn>
                              </v-card-actions>
                            </v-card>
                        </v-dialog>
                </v-card-actions>
              </v-card>
            </div>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
    <v-footer class="secondary" app>
      <v-layout row wrap align-center>
        <v-flex xs12>
            I'm footer
        </v-flex>
      </v-layout>
    </v-footer>
  </v-app>
  </v-container>
</template>
<script>
export default {
  data () {
    return {
        title: 'Your Logo',
        dialog: false,
        posts: [
          {
            title: '文章標題1',
            content: '今天天氣真好 ，我是文章測試標題1',
            imgUrl: 'https://raw.githubusercontent.com/vuetifyjs/docs/dev/static/doc-images/cards/drop.jpg'
          },
          {
            title: '文章標題2',
            content: '今天天氣真好 ，我是文章測試標題2',
            imgUrl: 'https://raw.githubusercontent.com/vuetifyjs/docs/dev/static/doc-images/cards/docks.jpg'
          },
          {
            title: '文章標題3',
            content: '今天天氣真好 ，我是文章測試標題3',
            imgUrl: 'https://raw.githubusercontent.com/vuetifyjs/docs/dev/static/doc-images/cards/plane.jpg'
          }
        ]
    }
  },
  name: 'App'
}
</script>

