<template>
    <v-container grid-list-xl id="article">
        <v-layout row wrap>
            <v-flex xs8 offset-xs2>
                <h1 class="article-title">Browsersync的使用</h1>
                <div class="meta" style="text-align: center;">
                    <div class="user-card size60">
                        <a href="https://www.cocoyo.xin/user/cocoyo" class="avatar">
                            <img alt=" cocoyo" src="https://image.cocoyo.xin/IMG_0347.PNG" class="img-circle" style="width: 30px; height: 30px;">
                        </a>
                        <h4>
                            <a href="https://www.cocoyo.xin/user/cocoyo">cocoyo</a>
                        </h4>
                        <time>发表于 2个月前</time>
                    </div>
                    <div class="actions">
                        <a href="javascript:;" class="btn-comment">
                            <i class="ion-pricetag"></i>
                        </a>
                        <a href="https://www.cocoyo.xin/tag/windows">windows</a>
                    </div>
                </div>
                <v-card>
                    <v-card-text class="markdown elevation-8">
                        <h3 id="-">前言</h3>
                            <p>学前端页面时难免每次修改代码都需要<code>F5</code>刷新一下，作为一名极客怎么可能忍受得了，搜索了一下发现<code>Browsersync</code>这个好东西，使用起来真的很方便。</p>
                            <h3 id="-">安装</h3>
                            <h4 id="1-node-js">1. 安装 Node.js</h4>
                            <p>BrowserSync是基于Node.js的, 是一个Node模块， 如果您想要快速使用它，也许您需要先安装一下Node.js 。</p>
                            <h4 id="2-browsersync">2安装 BrowserSync</h4>
                            <p>全局安装</p>
                            <pre><code class="hljs sql">npm <span class="hljs-keyword">install</span> -g browser-<span class="hljs-keyword">sync</span>
</code></pre><h3 id="-">使用</h3>
                            <p>具体的使用和命令我这里就不说那么多了，可以看官方文档<a href="http://www.browsersync.cn/">http://www.browsersync.cn/</a></p>
                            <p>我这里使用的是动态网站，进入所需监听的目录</p>
                            <pre><code class="hljs apache">
<span class="hljs-attribute">browser</span>-sync start --proxy <span class="hljs-string">"seekers.test"</span> --files <span class="hljs-string">"public/css/*.css,app/Http/controllers/,resources/views/ "</span>
</code></pre><p>可以看到如下界面</p>
                            <p><img src="https://image.cocoyo.xin/article/201801/25/6ae71f2c551348abf8148d3189179e02.png" alt="V]NL9{T8YB9220R8KG~A%I0.png"></p>
                            <p>每次文件改变都会自动帮你刷新。</p>
                    </v-card-text>
                </v-card>
            </v-flex>
            <v-flex xs8 offset-xs2>
                <v-btn block style="background-color:#F96854 !important;" dark>登陆发表评论</v-btn>
                <v-flex xs8 offset-xs2>
                    <v-text-field
                            name="input-1"
                            label="Label Text"
                            textarea
                            dark
                    ></v-text-field>
                </v-flex>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    import CommentGrid from 'vue-comment-grid'
    export default {
        components: {
            CommentGrid
        }
    }
</script>

