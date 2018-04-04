<template>
    <v-container grid-list-xl class="container-show" id="article">
        <v-layout row wrap>
            <v-flex md10 offset-md1>
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
                    <v-card-text class="markdown elevation-8" style="padding: 15px 20px 1px 30px;">
                      <h3 id="-">使用</h3>
                            <p> <code>Passport</code>预置了 Vue 组件作为示例以供使用</p>
                            <p> 发布组件</p>
                            <pre><code class="hljs nginx">
 <span class="hljs-attribute">php</span> artisan vendor:publish --tag=passport-components
</code></pre><p> 发布后的组件位于 <code>resources/assets/js/components</code> 目录下，组件发布之后，还需要将它们注册到<code>resources/assets/js/app.js</code> 文件：</p>
                            <pre><code class="hljs coffeescript">
 Vue.component(
    <span class="hljs-string">'passport-clients'</span>,
    <span class="hljs-built_in">require</span>(<span class="hljs-string">'./components/passport/Clients.vue'</span>)
);

Vue.component(
    <span class="hljs-string">'passport-authorized-clients'</span>,
    <span class="hljs-built_in">require</span>(<span class="hljs-string">'./components/passport/AuthorizedClients.vue'</span>)
);

Vue.component(
    <span class="hljs-string">'passport-personal-access-tokens'</span>,
    <span class="hljs-built_in">require</span>(<span class="hljs-string">'./components/passport/PersonalAccessTokens.vue'</span>)
);
</code></pre><p> 注册完成之后运行<code>npm run dev</code>来重新编译前端资源,重新编译前端资源后，就可以将这些组件放到应用的某个模板中以便创建客户端和私人访问令牌</p>
                            <pre><code class="hljs apache">
<span class="hljs-section">&lt;passport-clients&gt;</span><span class="hljs-section">&lt;/passport-clients&gt;</span>
<span class="hljs-section">&lt;passport-authorized-clients&gt;</span><span class="hljs-section">&lt;/passport-authorized-clients&gt;</span>
<span class="hljs-section">&lt;passport-personal-access-tokens&gt;</span><span class="hljs-section">&lt;/passport-personal-access-tokens&gt;</span>
</code></pre><p> 访问文件我们会出现如下结果</p>
                            <p><img src="https://image.cocoyo.xin/article/201801/06/b2601a5a5219c6a178037e6b532199ae.png" alt="QZR3U5P0{BK}]}~J(`LNXTH.png"></p>
                            <p>当然那个客户端3是我点击<code>Create New Client</code>生成的,你也可以自己点击生成,只需填写名称和重定向地址就好了。</p>
                            <p>生成了<code>clent_id</code>和<code>Secret</code>之后我们就可以根据这个去获取<code>access_token</code>,下面是我的代码:</p>
                            <pre><code class="hljs php">Route::get(<span class="hljs-string">'test/oauth'</span>, <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-params">()</span> </span>{
    $query = http_build_query([
        <span class="hljs-string">'client_id'</span> =&gt; <span class="hljs-number">3</span>,
        <span class="hljs-string">'redirect_uri'</span> =&gt; <span class="hljs-string">'http://cocoyo.test/callback'</span>,
        <span class="hljs-string">'response_type'</span> =&gt; <span class="hljs-string">'code'</span>,
        <span class="hljs-string">'scope'</span> =&gt; <span class="hljs-string">''</span>,
    ]);

    <span class="hljs-keyword">return</span> redirect(<span class="hljs-string">'http://blog.test/oauth/authorize?'</span>.$query);
});

Route::get(<span class="hljs-string">'callback'</span>, <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-params">(\Illuminate\Http\Request $request)</span> </span>{
    $http = <span class="hljs-keyword">new</span> GuzzleHttp\Client;

    $response = $http-&gt;post(<span class="hljs-string">'http://blog.test/oauth/token'</span>, [
        <span class="hljs-string">'form_params'</span> =&gt; [
            <span class="hljs-string">'grant_type'</span> =&gt; <span class="hljs-string">'authorization_code'</span>,
            <span class="hljs-string">'client_id'</span> =&gt; <span class="hljs-number">3</span>,
            <span class="hljs-string">'client_secret'</span> =&gt; <span class="hljs-string">'JNtBjM2bBTqITnkmSksIPOIHV1GWJp2yDUTJdbMG'</span>,
            <span class="hljs-string">'redirect_uri'</span> =&gt; <span class="hljs-string">'http://cocoyo.test/callback'</span>,
            <span class="hljs-string">'code'</span> =&gt; $request-&gt;code,
        ],
    ]);

    <span class="hljs-keyword">return</span> json_decode((string) $response-&gt;getBody(), <span class="hljs-keyword">true</span>);
});
</code></pre><p>如何一切正常的话会返回如下结果:</p>
                            <p><img src="https://image.cocoyo.xin/article/201801/06/c1ed2c3ea89dc2570aea636444e1efad.png" alt="SSNGSNV$R2NN~UYI$R}A_~L.png"></p>
                            <p>其实在这一步的时候我试了好久总是返回401错误，<code>google</code>了好久，最后发现执行</p>
                            <pre><code class="hljs css">
<span class="hljs-selector-tag">php</span> <span class="hljs-selector-tag">artisan</span> <span class="hljs-selector-tag">config</span><span class="hljs-selector-pseudo">:cache</span>
</code></pre><p>便成功了。有了<code>access_token</code>我们就可以去请求用户信息了，我们使用<code>postman</code>来测试一下</p>
                            <p><img src="https://image.cocoyo.xin/article/201801/06/f9979533c487222d587eda5e1b1421db.png" alt="@G)WWAYS$I3]TGIN)SOJMQV.png"></p>
                            <p>完美！好了到这里就结束了。</p>
                    </v-card-text>
                </v-card>
            </v-flex>
            <v-flex md10 offset-md1 class="comment">
                <v-btn block style="background-color:#F96854 !important;" dark>登陆发表评论</v-btn>
                <v-flex md9 offset-md2>
                    <div class="media">
                        <div class="media-left">
                            <a href="/user/cocoyo">
                                <v-avatar class="grey lighten-4" size="60px">
                                    <img src="https://image.cocoyo.xin/IMG_0347.PNG" alt="avatar">
                                </v-avatar>
                            </a>
                        </div>
                        <div class="media-body box-body">
                            <div class="heading">
                                <v-icon size="10px">fas fa-user</v-icon>
                                cocoyo
                                &nbsp;&nbsp;&nbsp;&nbsp;
                                <v-icon size="10px">fas fa-clock</v-icon>
                                34分钟前
                                <span class="pull-right operate">
                            <a href="javascript:;">
                                  <v-icon size="10px">fas fa-trash</v-icon>
                            </a>
                            <a href="javascript:;">
                                 <v-icon size="10px">fas fa-reply</v-icon>
                            </a>
                        </span>
                            </div>
                            <div class="comment-body markdown"><p>非常赞！！</p>
                            </div>
                        </div>
                    </div>
                    <v-form>
                        <v-layout row>
                            <v-flex md2>
                                <v-subheader style="padding-top: 60px">
                                    <v-avatar class="grey lighten-4" size="60px">
                                        <img src="https://image.cocoyo.xin/IMG_0347.PNG" alt="avatar">
                                    </v-avatar>
                                </v-subheader>
                            </v-flex>
                            <v-flex md10>
                                <v-text-field name="input-1" label="Markdown" textarea
                                              class="comment-textarea"></v-text-field>
                                <v-layout row>
                                    <v-flex md12>
                                        <v-btn dark large style="background-color: #15b982">发布评论</v-btn>
                                    </v-flex>
                                </v-layout>
                            </v-flex>
                        </v-layout>

                    </v-form>
                </v-flex>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {

    }
</script>



