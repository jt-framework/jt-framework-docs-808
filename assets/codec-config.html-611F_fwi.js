import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,a as e}from"./app-cuoTE0Qt.js";const t={},p=e(`<h1 id="编码解码相关" tabindex="-1"><a class="header-anchor" href="#编码解码相关"><span>编码解码相关</span></a></h1><h2 id="jt808msgbytesprocessor" tabindex="-1"><a class="header-anchor" href="#jt808msgbytesprocessor"><span>Jt808MsgBytesProcessor</span></a></h2><p><code>Jt808MsgBytesProcessor</code> 负责 <strong>转义</strong> 请求消息/响应消息、<strong>计算校验码</strong>。</p><p>要想替换该组件，只需要声明一个 <code>Jt808MsgBytesProcessor</code> 类型的 <code>Bean</code> 即可。</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">Jt808MsgBytesProcessor</span> <span class="token punctuation">{</span>

    <span class="token doc-comment comment">/**
     * 转义请求消息
     *
     * <span class="token keyword">@param</span> <span class="token parameter">byteBuf</span> 请求消息, 不包含分隔符 <span class="token punctuation">{</span><span class="token keyword">@link</span> <span class="token reference"><span class="token namespace">io<span class="token punctuation">.</span>github<span class="token punctuation">.</span>hylexus<span class="token punctuation">.</span>jt<span class="token punctuation">.</span>jt808<span class="token punctuation">.</span></span><span class="token class-name">JtProtocolConstant</span><span class="token punctuation">#</span><span class="token field">PACKAGE_DELIMITER</span></span> 0X7E<span class="token punctuation">}</span>
     * <span class="token keyword">@return</span> 转义之后的消息
     */</span>
    <span class="token class-name">ByteBuf</span> <span class="token function">doEscapeForReceive</span><span class="token punctuation">(</span><span class="token class-name">ByteBuf</span> byteBuf<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Jt808MsgEscapeException</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 转义响应消息
     *
     * <span class="token keyword">@param</span> <span class="token parameter">byteBuf</span> 响应给客户端的消息, 不包含分隔符 <span class="token punctuation">{</span><span class="token keyword">@link</span> <span class="token reference"><span class="token namespace">io<span class="token punctuation">.</span>github<span class="token punctuation">.</span>hylexus<span class="token punctuation">.</span>jt<span class="token punctuation">.</span>jt808<span class="token punctuation">.</span></span><span class="token class-name">JtProtocolConstant</span><span class="token punctuation">#</span><span class="token field">PACKAGE_DELIMITER</span></span> 0X7E<span class="token punctuation">}</span>
     * <span class="token keyword">@return</span> 转义之后的消息
     */</span>
    <span class="token class-name">ByteBuf</span> <span class="token function">doEscapeForSend</span><span class="token punctuation">(</span><span class="token class-name">ByteBuf</span> byteBuf<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Jt808MsgEscapeException</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 就是校验码
     *
     * <span class="token keyword">@param</span> <span class="token parameter">byteBuf</span> 请求消息/响应消息
     * <span class="token keyword">@return</span> 检验码
     */</span>
    <span class="token keyword">byte</span> <span class="token function">calculateCheckSum</span><span class="token punctuation">(</span><span class="token class-name">ByteBuf</span> byteBuf<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>示例：</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token comment">// 替换内置的转义等逻辑</span>
<span class="token annotation punctuation">@Configuration</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MyJt808Config</span> <span class="token punctuation">{</span>
    <span class="token comment">// [[ 非必须配置 ]] -- 替换内置的转义等逻辑</span>
    <span class="token annotation punctuation">@Bean</span>
    <span class="token keyword">public</span> <span class="token class-name">Jt808MsgBytesProcessor</span> <span class="token function">jt808MsgBytesProcessor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">DefaultJt808MsgBytesProcessor</span><span class="token punctuation">(</span><span class="token class-name">ByteBufAllocator</span><span class="token punctuation">.</span><span class="token constant">DEFAULT</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="jt808msgdecoder" tabindex="-1"><a class="header-anchor" href="#jt808msgdecoder"><span>Jt808MsgDecoder</span></a></h2><p><code>Jt808MsgDecoder</code> 负责将请求中的 <strong>字节流</strong> 初步解析为 <code>Jt808Request</code> 对象。</p><p>如果内置的实现不符合要求 或者 内置实现返回的 <code>Jt808Request</code> 不符合要求，你可以自定义一个解码器。</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">Jt808MsgDecoder</span> <span class="token punctuation">{</span>

    <span class="token doc-comment comment">/**
     * 解析请求，返回 <span class="token punctuation">{</span><span class="token keyword">@link</span> <span class="token reference"><span class="token class-name">Jt808Request</span></span><span class="token punctuation">}</span> 实例。
     * <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>
     * 如果默认的 <span class="token punctuation">{</span><span class="token keyword">@link</span> <span class="token reference"><span class="token namespace">io<span class="token punctuation">.</span>github<span class="token punctuation">.</span>hylexus<span class="token punctuation">.</span>jt<span class="token punctuation">.</span>jt808<span class="token punctuation">.</span>spec<span class="token punctuation">.</span>impl<span class="token punctuation">.</span>request<span class="token punctuation">.</span></span><span class="token class-name">DefaultJt808Request</span></span> DefaultJt808Request<span class="token punctuation">}</span> 不满足需求 或
     * <span class="token punctuation">{</span><span class="token keyword">@link</span>  <span class="token reference"><span class="token namespace">io<span class="token punctuation">.</span>github<span class="token punctuation">.</span>hylexus<span class="token punctuation">.</span>jt<span class="token punctuation">.</span>jt808<span class="token punctuation">.</span>support<span class="token punctuation">.</span>codec<span class="token punctuation">.</span>impl<span class="token punctuation">.</span></span><span class="token class-name">DefaultJt808MsgDecoder</span></span> DefaultJt808MsgDecoder<span class="token punctuation">}</span> 不符合要求，
     * 可以提供自己的实现类在这里返回自己的 <span class="token punctuation">{</span><span class="token keyword">@link</span> <span class="token reference"><span class="token class-name">Jt808Request</span></span><span class="token punctuation">}</span> 实现
     *
     * <span class="token keyword">@param</span> <span class="token parameter">byteBuf</span> 请求消息(不包含分隔符 <span class="token punctuation">{</span><span class="token keyword">@link</span> <span class="token reference"><span class="token namespace">io<span class="token punctuation">.</span>github<span class="token punctuation">.</span>hylexus<span class="token punctuation">.</span>jt<span class="token punctuation">.</span>jt808<span class="token punctuation">.</span></span><span class="token class-name">JtProtocolConstant</span><span class="token punctuation">#</span><span class="token field">PACKAGE_DELIMITER</span></span> 0X7E<span class="token punctuation">}</span>)
     * <span class="token keyword">@return</span> 解析之后的 <span class="token punctuation">{</span><span class="token keyword">@link</span> <span class="token reference"><span class="token class-name">Jt808Request</span></span><span class="token punctuation">}</span> 实例.
     * <span class="token keyword">@see</span> <span class="token reference"><span class="token class-name">Jt808MsgBytesProcessor</span><span class="token punctuation">#</span><span class="token function">doEscapeForReceive</span><span class="token punctuation">(</span><span class="token class-name">ByteBuf</span><span class="token punctuation">)</span></span>
     * <span class="token keyword">@see</span> <span class="token reference"><span class="token class-name">Jt808MsgBytesProcessor</span><span class="token punctuation">#</span><span class="token function">calculateCheckSum</span><span class="token punctuation">(</span><span class="token class-name">ByteBuf</span><span class="token punctuation">)</span></span>
     */</span>
    <span class="token class-name">Jt808Request</span> <span class="token function">decode</span><span class="token punctuation">(</span><span class="token class-name">ByteBuf</span> byteBuf<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>示例:</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token comment">// 替换内置的 Jt808MsgDecoder</span>
<span class="token annotation punctuation">@Configuration</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MyJt808Config</span> <span class="token punctuation">{</span>

    <span class="token comment">// [[ 非必须配置 ]] -- 替换内置的 Jt808MsgDecoder</span>
    <span class="token annotation punctuation">@Bean</span>
    <span class="token keyword">public</span> <span class="token class-name">Jt808MsgDecoder</span> <span class="token function">jt808MsgDecoder</span><span class="token punctuation">(</span>
            <span class="token class-name">Jt808MsgTypeParser</span> jt808MsgTypeParser<span class="token punctuation">,</span>
            <span class="token class-name">Jt808MsgBytesProcessor</span> bytesProcessor<span class="token punctuation">,</span>
            <span class="token class-name">Jt808ProtocolVersionDetectorRegistry</span> registry<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">DefaultJt808MsgDecoder</span><span class="token punctuation">(</span>jt808MsgTypeParser<span class="token punctuation">,</span> bytesProcessor<span class="token punctuation">,</span> registry<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="jt808msgencoder" tabindex="-1"><a class="header-anchor" href="#jt808msgencoder"><span>Jt808MsgEncoder</span></a></h2><p><code>Jt808MsgEncoder</code> 负责将 <code>Jt808Response</code> 对象编码为 <strong>符合808标准</strong> 的字节流。</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">Jt808MsgEncoder</span> <span class="token punctuation">{</span>

    <span class="token doc-comment comment">/**
     * 将 <span class="token punctuation">{</span><span class="token keyword">@link</span> <span class="token reference"><span class="token class-name">Jt808Response</span></span><span class="token punctuation">}</span> 编码为 <span class="token punctuation">{</span><span class="token keyword">@code</span> <span class="token code-section"><span class="token code language-java">符合<span class="token number">808</span>标准</span></span><span class="token punctuation">}</span> 的字节流
     *
     * <span class="token keyword">@param</span> <span class="token parameter">response</span> 响应消息
     * <span class="token keyword">@return</span> 编码后的字节流
     * <span class="token keyword">@see</span> <span class="token reference"><span class="token class-name">Jt808MsgBytesProcessor</span><span class="token punctuation">#</span><span class="token function">doEscapeForSend</span><span class="token punctuation">(</span><span class="token class-name">ByteBuf</span><span class="token punctuation">)</span></span>
     * <span class="token keyword">@see</span> <span class="token reference"><span class="token class-name">Jt808MsgBytesProcessor</span><span class="token punctuation">#</span><span class="token function">calculateCheckSum</span><span class="token punctuation">(</span><span class="token class-name">ByteBuf</span><span class="token punctuation">)</span></span>
     */</span>
    <span class="token class-name">ByteBuf</span> <span class="token function">encode</span><span class="token punctuation">(</span><span class="token class-name">Jt808Response</span> response<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果内置的实现不符合要求，可以声明一个 <code>Jt808MsgEncoder</code> 类型的 Bean，替换内置实现：</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token comment">// 替换内置的 Jt808MsgEncoder</span>
<span class="token annotation punctuation">@Configuration</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MyJt808Config</span> <span class="token punctuation">{</span>

    <span class="token comment">// [[ 非必须配置 ]] -- 替换内置的 Jt808MsgEncoder</span>
    <span class="token annotation punctuation">@Bean</span>
    <span class="token keyword">public</span> <span class="token class-name">Jt808MsgEncoder</span> <span class="token function">jt808MsgEncoder</span><span class="token punctuation">(</span><span class="token class-name">Jt808MsgBytesProcessor</span> processor<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">DefaultJt808MsgEncoder</span><span class="token punctuation">(</span>processor<span class="token punctuation">,</span> <span class="token class-name">ByteBufAllocator</span><span class="token punctuation">.</span><span class="token constant">DEFAULT</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,18),c=[p];function o(l,i){return s(),a("div",null,c)}const r=n(t,[["render",o],["__file","codec-config.html.vue"]]);export{r as default};
