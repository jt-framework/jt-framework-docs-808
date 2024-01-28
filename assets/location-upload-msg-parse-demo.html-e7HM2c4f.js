import{_ as a}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as e,c as t,b as n,a as p}from"./app-cuoTE0Qt.js";const o={},c=p(`<h1 id="位置上传报文解析示例" tabindex="-1"><a class="header-anchor" href="#位置上传报文解析示例"><span>位置上传报文解析示例</span></a></h1><div class="hint-container caution"><p class="hint-container-title">警告</p><ul><li><strong>808</strong>文档中定义的位置上传报文有很多字段，<strong>但是</strong> 许多厂商实现的 <strong>808协议</strong> 位置上传报文 <strong>只是原始808的一个子集</strong> 。</li><li>本文举例用到的报文也 <strong>不是标准完整的位置上传报文</strong>，但是原理都一样。</li><li>此处以 <strong>2019</strong> 版的位置上传报文为例，展示如何基于注解来解析报文。</li></ul></div><h2 id="解析报文到实体类" tabindex="-1"><a class="header-anchor" href="#解析报文到实体类"><span>解析报文到实体类</span></a></h2><p>实体类映射关系如下：</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token annotation punctuation">@Data</span>
<span class="token annotation punctuation">@Accessors</span><span class="token punctuation">(</span>chain <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@Jt808RequestBody</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">LocationUploadMsgV2019</span> <span class="token punctuation">{</span>
    <span class="token comment">// (1). byte[0,4)  DWORD 报警标志</span>
    <span class="token comment">// @RequestField(order = 1, startIndex = 0, dataType = DWORD)</span>
    <span class="token comment">// 从 2.1.1 开始可以不再指定 \`startIndex\` 属性</span>
    <span class="token comment">// 从 2.1.1 开始可以不再指定 \`startIndex\` 属性</span>
    <span class="token comment">// 从 2.1.1 开始可以不再指定 \`startIndex\` 属性</span>
    <span class="token annotation punctuation">@RequestField</span><span class="token punctuation">(</span>order <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span> dataType <span class="token operator">=</span> <span class="token constant">DWORD</span><span class="token punctuation">)</span>
    <span class="token comment">// @RequestFieldAlias.Dword(order = 1) // v2.1.1</span>
    <span class="token keyword">private</span> <span class="token keyword">long</span> alarmFlag<span class="token punctuation">;</span>

    <span class="token comment">// (2). byte[4,8) DWORD 状态</span>
    <span class="token annotation punctuation">@RequestField</span><span class="token punctuation">(</span>order <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">,</span> dataType <span class="token operator">=</span> <span class="token constant">DWORD</span><span class="token punctuation">)</span>
    <span class="token comment">// @RequestFieldAlias.Dword(order = 2)</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> status<span class="token punctuation">;</span>

    <span class="token comment">// 将上面的 status 字段的第0位取出转为 int 类型</span>
    <span class="token annotation punctuation">@SlicedFrom</span><span class="token punctuation">(</span>sourceFieldName <span class="token operator">=</span> <span class="token string">&quot;status&quot;</span><span class="token punctuation">,</span> bitIndex <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> accIntStatus<span class="token punctuation">;</span>
    <span class="token comment">// 将上面的 status 字段的第0位取出转为 boolean 类型</span>
    <span class="token annotation punctuation">@SlicedFrom</span><span class="token punctuation">(</span>sourceFieldName <span class="token operator">=</span> <span class="token string">&quot;status&quot;</span><span class="token punctuation">,</span> bitIndex <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">Boolean</span> accBooleanStatus<span class="token punctuation">;</span>
    <span class="token comment">// 0 北纬;1 南纬</span>
    <span class="token comment">// 将上面的 status 字段的第2位取出转为 int 类型</span>
    <span class="token annotation punctuation">@SlicedFrom</span><span class="token punctuation">(</span>sourceFieldName <span class="token operator">=</span> <span class="token string">&quot;status&quot;</span><span class="token punctuation">,</span> bitIndex <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> latType<span class="token punctuation">;</span>

    <span class="token comment">// (3). byte[8,12) DWORD 纬度</span>
    <span class="token annotation punctuation">@RequestField</span><span class="token punctuation">(</span>order <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">,</span> dataType <span class="token operator">=</span> <span class="token constant">DWORD</span><span class="token punctuation">)</span>
    <span class="token comment">// @RequestFieldAlias.Dword(order = 3)</span>
    <span class="token keyword">private</span> <span class="token keyword">long</span> lat<span class="token punctuation">;</span>

    <span class="token comment">// (4). byte[12,16) DWORD 经度</span>
    <span class="token annotation punctuation">@RequestField</span><span class="token punctuation">(</span>order <span class="token operator">=</span> <span class="token number">4</span><span class="token punctuation">,</span> dataType <span class="token operator">=</span> <span class="token constant">DWORD</span><span class="token punctuation">)</span>
    <span class="token comment">// @RequestFieldAlias.Dword(order = 4)</span>
    <span class="token keyword">private</span> <span class="token keyword">long</span> lng<span class="token punctuation">;</span>

    <span class="token comment">// (5). byte[16,18) WORD 高度</span>
    <span class="token annotation punctuation">@RequestField</span><span class="token punctuation">(</span>order <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">,</span> dataType <span class="token operator">=</span> <span class="token constant">WORD</span><span class="token punctuation">)</span>
    <span class="token comment">// @RequestFieldAlias.Word(order = 5)</span>
    <span class="token keyword">private</span> <span class="token class-name">Integer</span> height<span class="token punctuation">;</span>

    <span class="token comment">// (6). byte[18,20) WORD 速度</span>
    <span class="token annotation punctuation">@RequestField</span><span class="token punctuation">(</span>order <span class="token operator">=</span> <span class="token number">6</span><span class="token punctuation">,</span> dataType <span class="token operator">=</span> <span class="token constant">WORD</span><span class="token punctuation">)</span>
    <span class="token comment">// @RequestFieldAlias.Word(order = 6)</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> speed<span class="token punctuation">;</span>

    <span class="token comment">// (7). byte[20,22) WORD 方向</span>
    <span class="token annotation punctuation">@RequestField</span><span class="token punctuation">(</span>order <span class="token operator">=</span> <span class="token number">7</span><span class="token punctuation">,</span> dataType <span class="token operator">=</span> <span class="token constant">WORD</span><span class="token punctuation">)</span>
    <span class="token comment">// @RequestFieldAlias.Word(order = 6)</span>
    <span class="token keyword">private</span> <span class="token class-name">Integer</span> direction<span class="token punctuation">;</span>

    <span class="token comment">// (8). byte[22,28) BCD[6] 时间</span>
    <span class="token annotation punctuation">@RequestField</span><span class="token punctuation">(</span>order <span class="token operator">=</span> <span class="token number">8</span><span class="token punctuation">,</span> dataType <span class="token operator">=</span> <span class="token constant">BCD</span><span class="token punctuation">,</span> length <span class="token operator">=</span> <span class="token number">6</span><span class="token punctuation">)</span>
    <span class="token comment">// @RequestFieldAlias.Bcd(order = 8, length = 6)</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> time<span class="token punctuation">;</span>

    <span class="token comment">// @RequestFieldAlias.BcdDateTime(order = 8)</span>
    <span class="token comment">// private LocalDateTime time;</span>

    <span class="token comment">// (9). byte[28,n) 附加项列表</span>
    <span class="token comment">// @RequestField(order = 9, dataType = LIST, lengthExpression = &quot;#request.msgBodyLength() - 28&quot;)</span>
    <span class="token annotation punctuation">@RequestField</span><span class="token punctuation">(</span>order <span class="token operator">=</span> <span class="token number">9</span><span class="token punctuation">,</span> dataType <span class="token operator">=</span> <span class="token constant">LIST</span><span class="token punctuation">,</span> lengthExpression <span class="token operator">=</span> <span class="token string">&quot;#ctx.msgBodyLength() - 28&quot;</span><span class="token punctuation">)</span>
    <span class="token comment">// @RequestFieldAlias.List(order = 9, lengthExpression = &quot;#ctx.msgBodyLength() - 28&quot;)</span>
    <span class="token keyword">private</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">ExtraItem</span><span class="token punctuation">&gt;</span></span> extraItemList<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Data</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">class</span> <span class="token class-name">ExtraItem</span> <span class="token punctuation">{</span>
        <span class="token comment">// 附加信息ID</span>
        <span class="token annotation punctuation">@RequestField</span><span class="token punctuation">(</span>order <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> dataType <span class="token operator">=</span> <span class="token constant">BYTE</span><span class="token punctuation">)</span>
        <span class="token comment">// @RequestFieldAlias.Byte(order = 0)</span>
        <span class="token keyword">private</span> <span class="token keyword">int</span> id<span class="token punctuation">;</span>

        <span class="token comment">// 附加信息长度</span>
        <span class="token annotation punctuation">@RequestField</span><span class="token punctuation">(</span>order <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span> dataType <span class="token operator">=</span> <span class="token constant">BYTE</span><span class="token punctuation">)</span>
        <span class="token comment">// @RequestFieldAlias.Byte(order = 1)</span>
        <span class="token keyword">private</span> <span class="token keyword">int</span> contentLength<span class="token punctuation">;</span>

        <span class="token comment">// 附加信息内容</span>
        <span class="token annotation punctuation">@RequestField</span><span class="token punctuation">(</span>order <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">,</span> lengthExpression <span class="token operator">=</span> <span class="token string">&quot;#this.contentLength&quot;</span><span class="token punctuation">,</span> dataType <span class="token operator">=</span> <span class="token constant">BYTES</span><span class="token punctuation">)</span>
        <span class="token comment">// @RequestFieldAlias.Bytes(order = 3, lengthExpression = &quot;#this.contentLength&quot;)</span>
        <span class="token comment">// private byte[] content; // 2.0.0 开始支持</span>
        <span class="token keyword">private</span> <span class="token class-name">ByteArrayContainer</span> content<span class="token punctuation">;</span> <span class="token comment">// 2.1.1 开始支持</span>
        <span class="token comment">// private ByteBufContainer content; // 2.1.1 开始支持</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>消息处理器如下：</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token annotation punctuation">@Slf4j</span>
<span class="token annotation punctuation">@Component</span>
<span class="token annotation punctuation">@Jt808RequestHandler</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">LocationMsgHandler</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Jt808RequestHandlerMapping</span><span class="token punctuation">(</span>msgType <span class="token operator">=</span> <span class="token number">0x0200</span><span class="token punctuation">,</span> versions <span class="token operator">=</span> <span class="token constant">VERSION_2019</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">BuiltinServerCommonReplyMsg</span> <span class="token function">processLocationUploadMsgV2019</span><span class="token punctuation">(</span><span class="token class-name">Jt808RequestEntity</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">LocationUploadMsgV2019</span><span class="token punctuation">&gt;</span></span> request<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;LocationUpload -- V2019 -- {}&quot;</span><span class="token punctuation">,</span> request<span class="token punctuation">.</span><span class="token function">body</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">return</span> <span class="token class-name">BuiltinServerCommonReplyMsg</span><span class="token punctuation">.</span><span class="token function">success</span><span class="token punctuation">(</span>request<span class="token punctuation">.</span><span class="token function">msgId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> request<span class="token punctuation">.</span><span class="token function">flowId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><div class="highlight-line"> </div><div class="highlight-line"> </div><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="测试" tabindex="-1"><a class="header-anchor" href="#测试"><span>测试</span></a></h2><p>测试报文如下</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>7e02004086010000000001893094655200E4000000000000000101D907F2073D336C000000000000211124114808010400000026030200003001153101002504000000001404000000011504000000FA160400000000170200001803000000EA10FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF02020000EF0400000000F31B017118000000000000000000000000000000000000000000000000567e
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>消息处理器截图如下：</p>`,11),l={class:"demo"},i=["src"];function u(s,r){return e(),t("div",null,[c,n("p",l,[n("img",{src:s.$withBase("/img/v2/annotation-driven-dev/location-upload-v2019-debug.png")},null,8,i)])])}const v=a(o,[["render",u],["__file","location-upload-msg-parse-demo.html.vue"]]);export{v as default};
