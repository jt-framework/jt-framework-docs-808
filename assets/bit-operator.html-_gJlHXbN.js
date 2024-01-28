import{_ as t}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as p,c as o,b as n,a as s}from"./app-cuoTE0Qt.js";const e={},c=s('<h1 id="bitoperator-v2-1-1" tabindex="-1"><a class="header-anchor" href="#bitoperator-v2-1-1"><span>BitOperator(v2.1.1)</span></a></h1><div class="hint-container info"><p class="hint-container-title">提示</p><p><code>BitOperator</code> 是 <strong>2.1.1</strong> 中引入的辅助类。</p></div><h2 id="作用" tabindex="-1"><a class="header-anchor" href="#作用"><span>作用</span></a></h2><p><code>BitOperator</code> 是位操作的工具类，目前只支持 <strong>64</strong> 个 <code>Bit</code>(<code>java.lang.Long</code>) 的操作。</p><p>当然 <code>BitOperator</code> 也可以用在被 <code>@RequestField</code>、<code>@ResponseField</code>、<code>@RequestFieldAlias</code>、<code>@ResponseFieldAlias</code> 修饰的实体类的成员变量上。</p><h2 id="场景示例" tabindex="-1"><a class="header-anchor" href="#场景示例"><span>场景示例</span></a></h2><p>位操作的场景都可以用到，比如下面这个场景(需要对某个 <code>bit</code> 操作)：</p>',7),u={class:"demo"},l=["src"],i=s(`<p>以下面这条位置上报报文(<strong>2019</strong>)为例，其中的<strong>报警标志</strong>字段中 第 <strong>21</strong>(进出路线)个 <code>bit</code> 和第 <strong>20</strong>(进出区域)个 <code>bit</code> 是 <strong>1</strong>。</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">BuiltinMsg0200Test</span> <span class="token keyword">extends</span> <span class="token class-name">BaseReqRespMsgTest</span> <span class="token punctuation">{</span>
    <span class="token keyword">final</span> <span class="token class-name">String</span> hex <span class="token operator">=</span> <span class="token string">&quot;7E0200402D01000000000139123443210000003000000040000101CD41C2072901B00929029A005A23042821314101040000029B0202004303020309300163897E&quot;</span><span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">void</span> <span class="token function">test2019Alias</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">final</span> <span class="token class-name">BuiltinMsg0200V2019Alias</span> msg <span class="token operator">=</span> <span class="token function">decode</span><span class="token punctuation">(</span>hex<span class="token punctuation">,</span> <span class="token class-name">BuiltinMsg0200V2019Alias</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">assertMsg</span><span class="token punctuation">(</span>msg<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">assertMsg</span><span class="token punctuation">(</span><span class="token class-name">BuiltinMsg0200V2019Alias</span> msg<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">final</span> <span class="token class-name">BitOperator</span> alarmStatus <span class="token operator">=</span> <span class="token class-name">BitOperator</span><span class="token punctuation">.</span><span class="token function">mutable</span><span class="token punctuation">(</span>msg<span class="token punctuation">.</span><span class="token function">getAlarmFlag</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// final BitOperator alarmStatus = msg.getBitOperator();</span>
        <span class="token function">assertEquals</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> alarmStatus<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">assertEquals</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> alarmStatus<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token number">21</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="简单使用" tabindex="-1"><a class="header-anchor" href="#简单使用"><span>简单使用</span></a></h2><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">BitOperatorTest</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">void</span> <span class="token function">testBit</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 64个bit: 全是0</span>
        <span class="token keyword">final</span> <span class="token keyword">long</span> x <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token comment">// 第 1、3、22 个 bit 被置为 1，其他位没变</span>
        <span class="token keyword">final</span> <span class="token class-name">BitOperator</span> operator <span class="token operator">=</span> <span class="token class-name">BitOperator</span><span class="token punctuation">.</span><span class="token function">mutable</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token number">22</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">assertEquals</span><span class="token punctuation">(</span><span class="token string">&quot;0000000000000000000000000000000000000000010000000000000000001010&quot;</span><span class="token punctuation">,</span> operator<span class="token punctuation">.</span><span class="token function">binaryString</span><span class="token punctuation">(</span><span class="token number">64</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">assertEquals</span><span class="token punctuation">(</span><span class="token string">&quot;00000000010000000000000000001010&quot;</span><span class="token punctuation">,</span> operator<span class="token punctuation">.</span><span class="token function">binaryString</span><span class="token punctuation">(</span><span class="token number">32</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">assertEquals</span><span class="token punctuation">(</span><span class="token string">&quot;010000000000000000001010&quot;</span><span class="token punctuation">,</span> operator<span class="token punctuation">.</span><span class="token function">binaryString</span><span class="token punctuation">(</span><span class="token number">24</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 第 1 个 bit 被置为 0</span>
        <span class="token keyword">final</span> <span class="token class-name">BitOperator</span> operator1 <span class="token operator">=</span> operator<span class="token punctuation">.</span><span class="token function">reset</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">assertEquals</span><span class="token punctuation">(</span><span class="token string">&quot;010000000000000000001000&quot;</span><span class="token punctuation">,</span> operator1<span class="token punctuation">.</span><span class="token function">binaryString</span><span class="token punctuation">(</span><span class="token number">24</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">final</span> <span class="token keyword">int</span> y <span class="token operator">=</span> <span class="token number">0b11111111</span><span class="token punctuation">;</span>
        <span class="token comment">// 第 3 个 bit 被置为 0</span>
        <span class="token function">assertEquals</span><span class="token punctuation">(</span><span class="token string">&quot;11110111&quot;</span><span class="token punctuation">,</span> <span class="token class-name">BitOperator</span><span class="token punctuation">.</span><span class="token function">mutable</span><span class="token punctuation">(</span>y<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">reset</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">binaryString</span><span class="token punctuation">(</span><span class="token number">8</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 从第 3 个 bit 开始, 连续将 2 个 bit 置为 0</span>
        <span class="token function">assertEquals</span><span class="token punctuation">(</span><span class="token string">&quot;11100111&quot;</span><span class="token punctuation">,</span> <span class="token class-name">BitOperator</span><span class="token punctuation">.</span><span class="token function">mutable</span><span class="token punctuation">(</span>y<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">resetRange</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">binaryString</span><span class="token punctuation">(</span><span class="token number">8</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">final</span> <span class="token keyword">long</span> z <span class="token operator">=</span> <span class="token number">0b00001000</span><span class="token punctuation">;</span>
        <span class="token comment">// z 的第 3 个 bit 是 1</span>
        <span class="token function">assertEquals</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token class-name">BitOperator</span><span class="token punctuation">.</span><span class="token function">mutable</span><span class="token punctuation">(</span>z<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token function">assertEquals</span><span class="token punctuation">(</span><span class="token number">0b11</span><span class="token punctuation">,</span> <span class="token class-name">BitOperator</span><span class="token punctuation">.</span><span class="token function">mutable</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">wordValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">assertEquals</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token class-name">BitOperator</span><span class="token punctuation">.</span><span class="token function">mutable</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">wordValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4);function k(a,r){return p(),o("div",null,[c,n("p",u,[n("img",{src:a.$withBase("/img/v2/utilities/bit-operator-case-01.png")},null,8,l)]),i])}const v=t(e,[["render",k],["__file","bit-operator.html.vue"]]);export{v as default};
