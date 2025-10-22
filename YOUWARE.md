# GOAOXOR 营销站开发指南

## 项目概览
- **技术栈**：React 18 · TypeScript · Vite 7 · Tailwind CSS 3 · Framer Motion
- **项目定位**：GOAOXOR 创意项目撮合平台单页落地站，围绕“可信赖的影视/动画团队匹配”输出中文内容
- **整体架构**：以 `src/App.tsx` 为入口，按模块化组件组织页面区块，配合 `ScrollProgress` 与浮动按钮提升交互反馈

## 常用命令
| 场景 | 命令 |
| --- | --- |
| 安装依赖 | `npm install` |
| 产出生产包 | `npm run build` |

> **提示**：目前未引入测试或 lint 流程，如需扩展请在 `package.json` 中添加对应脚本。

## 目录速览
- `src/components/`：站点所有分区组件与滚动交互 (见下文“核心组件”)
- `src/assets/`：应用级别引用的图像、字体等（当前使用 public/assets 下静态资源）
- `public/assets/`：上线时可直接访问的图片，例如 `creative-workspace.jpg`、`team-collaboration.jpg`
- `src/index.css`：全局字体引入、设计系统 CSS 变量与滚动条样式
- `src/ScrollComponents.tsx`：进度条与回到顶部按钮的滚动逻辑

## 核心组件与职责
| 组件 | 说明 |
| --- | --- |
| `Header.tsx` | 顶部导航，含品牌标识、桌面/移动菜单、滚动时背景渐变与 CTA 提示 |
| `HeroSection.tsx` | 首屏视觉：背景图、主标题、副文案、双按钮 CTA、关键指标展示 |
| `StatsSection.tsx` | 三列数据卡片，凸显项目数量、团队数、客户节省等指标 |
| `VideoFormSection.tsx` | 左侧介绍图 + 按钮跳转 Vimeo，右侧为 1 分钟快速评估表单 |
| `ProcessSection.tsx` | 五步流程折叠卡，解释匹配—签约—监督—验收闭环 |
| `ServicesSection.tsx` | 五类服务 (影视/动画/后期/声音/视觉) 卡片化展示 |
| `TestimonialsSection.tsx` | 六个真实评价网格，含姓名、职位、时间、评分 |
| `AdvantagesSection.tsx` | 平台优势四项：筛选、收费、保障、跨国协作 |
| `FAQSection.tsx` | 五个常见问答，支持展开/收起动画 |
| `CTASection.tsx` | 背景渐变的最终行动区，提供表单、邮箱、电话、预约通话链接 |
| `Footer.tsx` | 底部导航、服务资源、联系方式与备案号 |
| `ScrollComponents.tsx` | 页面顶部滚动进度条 + 右下角回到顶部按钮 |

## 设计与内容规范
- **配色**：采用中性色 + 深绿色主色 (`--accent-primary: #2c6b67`)，搭配柔和渐变。乍看舒适、避免高饱和
- **字体**：通过 `index.css` 载入 `Inter` 与 `Poppins`，中文内容走系统字体；`font-headline` 用于标题强调
- **版式**：所有分区默认宽度 `max-w-6xl`，栅格/卡片圆角与阴影依赖 CSS 变量 `--radius-*`、`--shadow-soft`
- **动效**：Framer Motion 控制入场与 hover 动画，滚动 reveal 使用 Intersection Observer 封装在组件内
- **语言**：页面文案为简体中文；若新增英文文案，请保持中英搭配一致，避免混乱

## 静态资源管理
- 所有生产环境图片放置在 `public/assets/`，并以绝对路径 `/assets/xxx.jpg` 引用（已用于 Hero、视频模块）
- 新增资源时请保持文件名语义化，避免空格与大写扩散；引用前确认版权
- 若需要外部媒体（如 Vimeo），采用延迟加载 `data-src` + IntersectionObserver 避免阻塞

## 交互细节
- 滚动进度条 (`ScrollProgress`) 固定于顶部，随滚动平滑过渡
- 浮动按钮 (`FloatingActionButton`) 在 300px 后淡入，可平滑返回首屏
- 移动端导航使用 `AnimatePresence` 切换，注意收起时的可访问性（ARIA 与焦点管理已就位）

## 开发注意事项
1. **保持入口**：切勿修改 `index.html` 中 `<script type="module" src="/src/main.tsx"></script>`
2. **Tailwind 与 CSS 变量**：新增样式优先使用 Tailwind；若需全局变量请在 `index.css` 的 `:root` 中维护
3. **资源路径**：生产环境引用使用绝对路径 `/assets/...`，不要回退到 `src/assets` 直接引入
4. **内容更新**：本项目面向中文用户，修改文案应保持品牌语调（专业、可信赖、效率）
5. **构建校验**：每次提交重要改动均需运行 `npm run build`，确保产物无错误

## 后续扩展建议
- 若接入后端表单或 CRM，可在 `VideoFormSection`、`CTASection` 内替换表单逻辑，或通过 API Hook 注入
- 可在 `public/assets` 或组件 props 中加入团队案例图集，配合轻量弹窗展示
- 如需多语言支持，可结合 i18next，将文案抽离至资源文件后再自动切换

> 如需进一步协作，请在改动完成后同步更新本指南，保持团队对项目状态的最新认知。
