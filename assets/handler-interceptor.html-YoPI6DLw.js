import{_ as l}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as t,o as u,c as i,b as n,d as s,e as a,w as e,a as k}from"./app-cuoTE0Qt.js";const r={},d=n("h1",{id:"处理器拦截器",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#处理器拦截器"},[n("span",null,"处理器拦截器")])],-1),m=n("h2",{id:"介绍",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#介绍"},[n("span",null,"介绍")])],-1),b=n("p",null,[s("从 "),n("code",null,"SpringMvc"),s(" 借鉴(抄袭)了一个 "),n("code",null,"Jt808HandlerInterceptor"),s(" ,会在执行处理器方法之前、之后已经处理器方法出现异常时回调对应方法。")],-1),v=n("code",null,"SpringMvc",-1),g=n("br",null,null,-1),h={href:"https://github.com/spring-projects/spring-framework/blob/v5.3.14/spring-webmvc/src/main/java/org/springframework/web/servlet/HandlerInterceptor.java",target:"_blank",rel:"noopener noreferrer"},w=n("br",null,null,-1),f=k(`<div class="hint-container tip"><p class="hint-container-title">提示</p><p>将 <code>Jt808HandlerInterceptor</code> 的实现类实例加入到 <code>spring</code> 容器中就可以生效了。</p></div><p>接口定义如下：</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">Jt808HandlerInterceptor</span> <span class="token keyword">extends</span> <span class="token class-name">OrderedComponent</span> <span class="token punctuation">{</span>

    <span class="token doc-comment comment">/**
     * 调用处理器方法之前回调
     *
     * <span class="token keyword">@param</span> <span class="token parameter">exchange</span> 当前请求上下文
     * <span class="token keyword">@param</span> <span class="token parameter">handler</span>  处理当前消息的处理器,内置处理器有两种:
     *                 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ol</span><span class="token punctuation">&gt;</span></span>
     *                      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">{</span><span class="token keyword">@link</span> <span class="token reference"><span class="token class-name">SimpleJt808RequestHandler</span></span> SimpleJt808RequestHandler<span class="token punctuation">}</span> 的实现类<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
     *                      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>被 <span class="token punctuation">{</span><span class="token keyword">@link</span> <span class="token reference"><span class="token class-name">Jt808RequestHandlerMapping</span></span> @Jt808RequestHandlerMapping<span class="token punctuation">}</span> 标记的方法<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
     *                 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ol</span><span class="token punctuation">&gt;</span></span>
     * <span class="token keyword">@return</span> true: 会正常调用处理器方法处理消息; false: 直接返回,不再调用处理器方法
     */</span>
    <span class="token keyword">default</span> <span class="token keyword">boolean</span> <span class="token function">preHandle</span><span class="token punctuation">(</span><span class="token class-name">Jt808ServerExchange</span> exchange<span class="token punctuation">,</span> <span class="token class-name">Object</span> handler<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Throwable</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 处理器执行结束之后回调
     *
     * <span class="token keyword">@param</span> <span class="token parameter">exchange</span>      当前请求上下文
     * <span class="token keyword">@param</span> <span class="token parameter">handler</span>       处理当前消息的处理器,内置处理器有两种:
     *                      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ol</span><span class="token punctuation">&gt;</span></span>
     *                           <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">{</span><span class="token keyword">@link</span> <span class="token reference"><span class="token class-name">SimpleJt808RequestHandler</span></span> SimpleJt808RequestHandler<span class="token punctuation">}</span> 的实现类<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
     *                           <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>被 <span class="token punctuation">{</span><span class="token keyword">@link</span> <span class="token reference"><span class="token class-name">Jt808RequestHandlerMapping</span></span> @Jt808RequestHandlerMapping<span class="token punctuation">}</span> 标记的方法<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
     *                      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ol</span><span class="token punctuation">&gt;</span></span>
     * <span class="token keyword">@param</span> <span class="token parameter">handlerResult</span> 处理器处理结果
     */</span>
    <span class="token keyword">default</span> <span class="token keyword">void</span> <span class="token function">postHandle</span><span class="token punctuation">(</span><span class="token class-name">Jt808ServerExchange</span> exchange<span class="token punctuation">,</span> <span class="token class-name">Object</span> handler<span class="token punctuation">,</span> <span class="token annotation punctuation">@Nullable</span> <span class="token class-name">Jt808HandlerResult</span> handlerResult<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Throwable</span> <span class="token punctuation">{</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * <span class="token keyword">@param</span> <span class="token parameter">exchange</span>  当前请求上下文
     * <span class="token keyword">@param</span> <span class="token parameter">handler</span>   处理当前消息的处理器,内置处理器有两种:
     *                  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ol</span><span class="token punctuation">&gt;</span></span>
     *                       <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">{</span><span class="token keyword">@link</span> <span class="token reference"><span class="token class-name">SimpleJt808RequestHandler</span></span> SimpleJt808RequestHandler<span class="token punctuation">}</span> 的实现类<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
     *                       <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>被 <span class="token punctuation">{</span><span class="token keyword">@link</span> <span class="token reference"><span class="token class-name">Jt808RequestHandlerMapping</span></span> @Jt808RequestHandlerMapping<span class="token punctuation">}</span> 标记的方法<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
     *                  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ol</span><span class="token punctuation">&gt;</span></span>
     * <span class="token keyword">@param</span> <span class="token parameter">exception</span> 处理器处理消息时候出现的异常(@Nullable)
     */</span>
    <span class="token keyword">default</span> <span class="token keyword">void</span> <span class="token function">afterCompletion</span><span class="token punctuation">(</span><span class="token class-name">Jt808ServerExchange</span> exchange<span class="token punctuation">,</span> <span class="token class-name">Object</span> handler<span class="token punctuation">,</span> <span class="token annotation punctuation">@Nullable</span> <span class="token class-name">Throwable</span> exception<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Throwable</span> <span class="token punctuation">{</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例"><span>示例</span></a></h2><p>实现接口，并加入到 Spring 容器中即可。如果有多个拦截器，可以通过复写 <code>getOrder()</code> 方法来控制多个拦截器的执行顺序。</p>`,5),y=n("div",{class:"language-java line-numbers-mode","data-ext":"java","data-title":"java"},[n("pre",{class:"language-java"},[n("code",null,[n("span",{class:"token annotation punctuation"},"@Slf4j"),s(`
`),n("span",{class:"token annotation punctuation"},"@Component"),s(`
`),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"DemoInterceptor01"),s(),n("span",{class:"token keyword"},"implements"),s(),n("span",{class:"token class-name"},"Jt808HandlerInterceptor"),s(),n("span",{class:"token punctuation"},"{"),s(`

    `),n("span",{class:"token annotation punctuation"},"@Override"),s(`
    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"boolean"),s(),n("span",{class:"token function"},"preHandle"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"Jt808ServerExchange"),s(" exchange"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token class-name"},"Object"),s(" handler"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token keyword"},"throws"),s(),n("span",{class:"token class-name"},"Throwable"),s(),n("span",{class:"token punctuation"},"{"),s(`
        log`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"info"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"DemoInterceptor01#preHandle ... terminalId={}, msgType={}"'),n("span",{class:"token punctuation"},","),s(" exchange"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"request"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"terminalId"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(" exchange"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"request"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"msgType"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token annotation punctuation"},"@Override"),s(`
    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"void"),s(),n("span",{class:"token function"},"postHandle"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"Jt808ServerExchange"),s(" exchange"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token class-name"},"Object"),s(" handler"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token annotation punctuation"},"@Nullable"),s(),n("span",{class:"token class-name"},"Jt808HandlerResult"),s(" handlerResult"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token keyword"},"throws"),s(),n("span",{class:"token class-name"},"Throwable"),s(),n("span",{class:"token punctuation"},"{"),s(`
        log`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"info"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"DemoInterceptor01#postHandle ... terminalId={}, msgType={}, result={}"'),n("span",{class:"token punctuation"},","),s(`
                exchange`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"request"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"terminalId"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(" exchange"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"request"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"msgType"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(" handlerResult "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token keyword"},"null"),s(),n("span",{class:"token operator"},"?"),s(" handlerResult"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getReturnValue"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},":"),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token annotation punctuation"},"@Override"),s(`
    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"void"),s(),n("span",{class:"token function"},"afterCompletion"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"Jt808ServerExchange"),s(" exchange"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token class-name"},"Object"),s(" handler"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token annotation punctuation"},"@Nullable"),s(),n("span",{class:"token class-name"},"Throwable"),s(" exception"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token keyword"},"throws"),s(),n("span",{class:"token class-name"},"Throwable"),s(),n("span",{class:"token punctuation"},"{"),s(`
        log`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"info"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"DemoInterceptor01#afterCompletion ... terminalId={}, msgType={}, exception={}"'),n("span",{class:"token punctuation"},","),s(`
                exchange`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"request"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"terminalId"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(" exchange"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"request"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"msgType"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(" exchange"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token annotation punctuation"},"@Override"),s(`
    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"int"),s(),n("span",{class:"token function"},"getOrder"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"highlight-lines"},[n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{class:"highlight-line"}," "),n("br"),n("br"),n("br")]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),x=n("div",{class:"language-java line-numbers-mode","data-ext":"java","data-title":"java"},[n("pre",{class:"language-java"},[n("code",null,[n("span",{class:"token annotation punctuation"},"@Slf4j"),s(`
`),n("span",{class:"token annotation punctuation"},"@Component"),s(`
`),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"DemoInterceptor02"),s(),n("span",{class:"token keyword"},"implements"),s(),n("span",{class:"token class-name"},"Jt808HandlerInterceptor"),s(),n("span",{class:"token punctuation"},"{"),s(`

    `),n("span",{class:"token annotation punctuation"},"@Override"),s(`
    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"boolean"),s(),n("span",{class:"token function"},"preHandle"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"Jt808ServerExchange"),s(" exchange"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token class-name"},"Object"),s(" handler"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token keyword"},"throws"),s(),n("span",{class:"token class-name"},"Throwable"),s(),n("span",{class:"token punctuation"},"{"),s(`
        log`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"info"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"DemoInterceptor02#preHandle ... terminalId={}, msgType={}"'),n("span",{class:"token punctuation"},","),s(" exchange"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"request"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"terminalId"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(" exchange"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"request"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"msgType"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token annotation punctuation"},"@Override"),s(`
    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"void"),s(),n("span",{class:"token function"},"postHandle"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"Jt808ServerExchange"),s(" exchange"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token class-name"},"Object"),s(" handler"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token annotation punctuation"},"@Nullable"),s(),n("span",{class:"token class-name"},"Jt808HandlerResult"),s(" handlerResult"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token keyword"},"throws"),s(),n("span",{class:"token class-name"},"Throwable"),s(),n("span",{class:"token punctuation"},"{"),s(`
        log`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"info"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"DemoInterceptor01#postHandle ... terminalId={}, msgType={}, result={}"'),n("span",{class:"token punctuation"},","),s(`
                exchange`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"request"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"terminalId"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(" exchange"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"request"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"msgType"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(" handlerResult "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token keyword"},"null"),s(),n("span",{class:"token operator"},"?"),s(" handlerResult"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getReturnValue"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},":"),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token annotation punctuation"},"@Override"),s(`
    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"void"),s(),n("span",{class:"token function"},"afterCompletion"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"Jt808ServerExchange"),s(" exchange"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token class-name"},"Object"),s(" handler"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token annotation punctuation"},"@Nullable"),s(),n("span",{class:"token class-name"},"Throwable"),s(" exception"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token keyword"},"throws"),s(),n("span",{class:"token class-name"},"Throwable"),s(),n("span",{class:"token punctuation"},"{"),s(`
        log`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"info"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"DemoInterceptor01#afterCompletion ... terminalId={}, msgType={}, exception={}"'),n("span",{class:"token punctuation"},","),s(`
                exchange`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"request"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"terminalId"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(" exchange"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"request"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"msgType"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(" exchange"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token annotation punctuation"},"@Override"),s(`
    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"int"),s(),n("span",{class:"token function"},"getOrder"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"highlight-lines"},[n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{class:"highlight-line"}," "),n("br"),n("br"),n("br")]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1);function _(H,I){const c=t("ExternalLinkIcon"),o=t("CodeGroupItem"),p=t("CodeGroup");return u(),i("div",null,[d,m,b,n("p",null,[s("这个接口的作用和 "),v,g,s(" 的 "),n("a",h,[s("HandlerInterceptor"),a(c)]),w,s(" 一样。")]),f,a(p,null,{default:e(()=>[a(o,{title:"示例1",active:""},{default:e(()=>[y]),_:1}),a(o,{title:"示例2"},{default:e(()=>[x]),_:1})]),_:1})])}const R=l(r,[["render",_],["__file","handler-interceptor.html.vue"]]);export{R as default};
