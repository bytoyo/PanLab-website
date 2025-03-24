// 多语言内容
const translations = {
    zh: {
        PanLab: "PanLab",
        groupSubject: "聚焦基因组组装与基因AI大模型研究",
        home: "首页",
        news: "新闻",
        research: "研究方向",
        members: "团队成员",
        publications: "成果展示",
        about: "关于我们",
        switch: "Switch to English",
        groupPicture: "课题组风采",
        groupNews: "新闻",
        newTitle1: "大鹏的山",
        newContent1: "美",
        newTitle2: "大鹏的水",
        newContent2: "美",
        newTitle3: "大鹏的人",
        newContent3: "美",
        groupResearch: "研究方向",
        researchTitle1: "人工智能算法",
        researchContent1: "深度学习、强化学习等前沿技术研究",
        researchTitle2: "大数据系统",
        researchContent2: "高效数据处理与分析平台构建",
        researchTitle3: "行业应用",
        researchContent3: "推动AI在医疗、金融等领域的落地",
        groupMembers: "团队成员",
        groupLeader: "课题组组长",
        leaderName: "潘玮华 研究员",
        exp1: "中国农业科学院深圳农业基因组研究所（现）",
        exp2: "美国卡内基梅隆大学，博士后",
        exp3: "美国加州大学（河滨分校）, 计算机科学, 博士",
        exp4: "美国加州大学（河滨分校）, 统计学, 硕士",
        exp5: "中国科学技术大学, 计算机软件与理论, 硕士",
        exp6: "南京师范大学, 计算机科学与技术, 学士",
        groupMember1: "博士后/博士",
        name1: "许东",
        school1: "中国农业科学院深圳农业基因组研究所",
        direction1: "研究方向",
        name2: "杨金宝",
        school2: "华中农业大学",
        direction2: "研究方向：宏基因组",
        name3: "",
        school3: "",
        direction3: "",
        name4: "",
        school4: "",
        direction4: "",
        name5: "",
        school5: "",
        direction5: "",
        name6: "",
        school6: "",
        direction6: "",
        name7: "",
        school7: "",
        direction7: "",
        name8: "",
        school8: "",
        direction8: "",
        groupPublications: "成果展示",
        groupAbout: "关于我们",
        introduce1: "深圳农业基因组研究所简介",
        introduce1Info1: "2014年，中国农业科学院和深圳市共建中国农业科学院深圳农业基因组研究所（以下简称基因组所）。2020年10月，经中共深圳市委机构编制委员会办公室批准，基因组所加挂“岭南现代农业科学与技术广东省实验室深圳分中心”牌子，实行“一套人马、两块牌子”的运行模式。建设以来，以农业基因组学为核心，先后成立了组学技术、合成生物学、植物基因组、动物基因组、生态基因组、食品科学等研究中心和相关技术平台，形成了以多组学技术、基因编辑技术和合成生物学技术为基础，以生物育种和食品健康为方向的“3+2”学科体系。2019年以来自然指数排名全国农业类科研院所前列，在包括 Science、Nature、Cell 等顶级期刊在内的杂志上发表论文1500多篇，其中《科学（Science）》《自然（Nature）》、《细胞（Cell）》主刊10篇、《期刊引证报告（JCR）》学科排名第一或影响因子高于8的高水平期刊论文292篇，在组学算法分析、精准基因编辑、杂交马铃薯全基因组选择育种等研究方向已居世界前列，多项成果入选中国生命科学、农业科学等重大进展。以基因组设计育种育成国审、省审新品种40余个，农业基因组学等研究领域占据世界前沿。",
        introduce1Info2: "基因组所作为国内唯一一家专门从事农业基因组学研究的研究机构，集聚多方位科技资源，累计获批竞争性项目251项，其中国家级项目152项，累计批复金额达4.77亿元。构建了覆盖全产业链条的创新平台，获批热带作物生物育种全国重点实验室（和中国热科院等单位共建）、农业农村部基因组数据分析重点实验室、农业农村部合成生物学重点实验室、农业农村部畜禽生物组学重点实验室、中国农业科学院国际农业前沿科学中心、中国农业科学院深圳国际食品科学中心、深圳市农业基因组表型分析与利用重点实验室、深圳市农业合成生物学重点实验室、深圳市杂交马铃薯工程研究中心等科技创新平台。根据科技和产业发展的需求，建设了超算平台、组学技术平台、合成生物学技术平台、基因编辑平台、分子设计育种平台、生态安全平台等公共平台，以及综合试验农场。仪器设备累计3327台套，总值超1.72亿元，其中50万以上大型仪器55台套，实现100%开放共享。贯穿“种质资源收集—基因组分析—功能基因挖掘—分子设计育种—品种推广”全产业链条的创新平台已基本建成。为本项目搭建了基础研究平台，提供仪器设备保障和研究合作支撑，保障项目顺利实施。",
        introduce2: "组学技术中心简介",
        introduce2Info1: "组学技术研究中心成立于2018年，专注于生物组学大数据的研究与应用，致力于推动BT（生物技术）与IT（信息技术）的深度融合。中心汇聚了3个农科院创新团队、12个课题组以及多名高层次人才，包括国家优青、农科院“领军人才”和深圳市高层次人才，在基因组学、算法开发和育种研究等领域具有深厚积累。",
        introduce2Info2: "中心的研究方向涵盖AI赋能的多组学算法开发、高通量测序技术研发以及农业生物性状识别与解析。代表性成果包括三代序列组装算法（如WTDBG2、SMARTdenovo）、基于泛基因组的标记筛选工具（PanMarker），以及新型DNA断裂检测技术（DEtail-seq）。这些技术为基因组复杂区域的精准解析和功能注释提供了重要支持。",
        introduce2Info3: "围绕《“十四五”生物经济发展规划》，中心聚焦农业组学大数据驱动的基因组设计育种技术，助力农业高质量发展。通过整合多组学数据，构建协同调控网络，挖掘核心基因群，为中心在农业育种、疾病研究等领域的应用奠定了坚实基础。中心将继续以技术创新为核心，推动生命科学与现代农业的进步。",
        introduce3: "课题组简介",
        introduce3Info1: "潘玮华，研究员，博士生导师。2019年获美国加州大学河滨分校计算机科学博士学位和统计学硕士学位。2019-2020年在美国卡内基梅隆大学计算机学院计算生物学系担任Lane Fellow（博士后）。长期从事基因组学，尤其是基因组序列分析相关的生物信息算法研究。主要成果发表在顶级会议RECOMB、ISMB和专业期刊Genome Research、Plant Physiology、National Science Review、Molecular Plant、Bioinformatics、Genomics Proteomics & Bioinformatics等。主持国家自然科学基金面上项目、青年科学基金项目、深圳市优秀科技创新人才培养项目等科研项目。担任中国生物信息学学会（筹）生物信息算法专委会委员、中国生物工程学会计算生物学与生物信息学专委会委员等。担任Frontiers in Plant Science和Genes等期刊客座编辑。",
        joinUs: "加入我们",
        recruit: "诚招博士后/科研助理，简历投递：",
        copyStatement: "© 2023 PanLab. 版权所有.",
        join: "邮箱地址：",
        email: "panweihua@caas.cn",
    },
    en: {
        PanLab: "PanLab",
        groupSubject: "聚焦基因组组装与基因AI大模型研究",
        home: "Home",
        news: "News",
        research: "Research",
        members: "Team",
        publications: "Publications",
        about: "About",
        switch: "切换到中文",
        groupPicture: "课题组风采",
        groupNews: "新闻",
        newTitle1: "大鹏的山",
        newContent1: "美",
        newTitle2: "大鹏的水",
        newContent2: "美",
        newTitle3: "大鹏的人",
        newContent3: "美",
        groupResearch: "研究方向",
        researchTitle1: "人工智能算法",
        researchContent1: "深度学习、强化学习等前沿技术研究",
        researchTitle2: "大数据系统",
        researchContent2: "高效数据处理与分析平台构建",
        researchTitle3: "行业应用",
        researchContent3: "推动AI在医疗、金融等领域的落地",
        groupMembers: "团队成员",
        groupLeader: "课题组组长",
        leaderName: "潘玮华 研究员",
        exp1: "中国农业科学院深圳农业基因组研究所（现）",
        exp2: "美国卡内基梅隆大学，博士后",
        exp3: "美国加州大学（河滨分校）, 计算机科学, 博士",
        exp4: "美国加州大学（河滨分校）, 统计学, 硕士",
        exp5: "中国科学技术大学, 计算机软件与理论, 硕士",
        exp6: "南京师范大学, 计算机科学与技术, 学士",
        groupMember1: "博士后/博士",
        name1: "许东",
        school1: "中国农业科学院深圳农业基因组研究所",
        direction1: "研究方向",
        name2: "杨金宝",
        school2: "华中农业大学",
        direction2: "研究方向：宏基因组",
        name3: "",
        school3: "",
        direction3: "",
        name4: "",
        school4: "",
        direction4: "",
        name5: "",
        school5: "",
        direction5: "",
        name6: "",
        school6: "",
        direction6: "",
        name7: "",
        school7: "",
        direction7: "",
        name8: "",
        school8: "",
        direction8: "",
        groupPublications: "成果展示",
        groupAbout: "关于我们",
        introduce1: "深圳农业基因组研究所简介",
        introduce1Info1: "2014年，中国农业科学院和深圳市共建中国农业科学院深圳农业基因组研究所（以下简称基因组所）。2020年10月，经中共深圳市委机构编制委员会办公室批准，基因组所加挂“岭南现代农业科学与技术广东省实验室深圳分中心”牌子，实行“一套人马、两块牌子”的运行模式。建设以来，以农业基因组学为核心，先后成立了组学技术、合成生物学、植物基因组、动物基因组、生态基因组、食品科学等研究中心和相关技术平台，形成了以多组学技术、基因编辑技术和合成生物学技术为基础，以生物育种和食品健康为方向的“3+2”学科体系。2019年以来自然指数排名全国农业类科研院所前列，在包括 Science、Nature、Cell 等顶级期刊在内的杂志上发表论文1500多篇，其中《科学（Science）》《自然（Nature）》、《细胞（Cell）》主刊10篇、《期刊引证报告（JCR）》学科排名第一或影响因子高于8的高水平期刊论文292篇，在组学算法分析、精准基因编辑、杂交马铃薯全基因组选择育种等研究方向已居世界前列，多项成果入选中国生命科学、农业科学等重大进展。以基因组设计育种育成国审、省审新品种40余个，农业基因组学等研究领域占据世界前沿。",
        introduce1Info2: "基因组所作为国内唯一一家专门从事农业基因组学研究的研究机构，集聚多方位科技资源，累计获批竞争性项目251项，其中国家级项目152项，累计批复金额达4.77亿元。构建了覆盖全产业链条的创新平台，获批热带作物生物育种全国重点实验室（和中国热科院等单位共建）、农业农村部基因组数据分析重点实验室、农业农村部合成生物学重点实验室、农业农村部畜禽生物组学重点实验室、中国农业科学院国际农业前沿科学中心、中国农业科学院深圳国际食品科学中心、深圳市农业基因组表型分析与利用重点实验室、深圳市农业合成生物学重点实验室、深圳市杂交马铃薯工程研究中心等科技创新平台。根据科技和产业发展的需求，建设了超算平台、组学技术平台、合成生物学技术平台、基因编辑平台、分子设计育种平台、生态安全平台等公共平台，以及综合试验农场。仪器设备累计3327台套，总值超1.72亿元，其中50万以上大型仪器55台套，实现100%开放共享。贯穿“种质资源收集—基因组分析—功能基因挖掘—分子设计育种—品种推广”全产业链条的创新平台已基本建成。为本项目搭建了基础研究平台，提供仪器设备保障和研究合作支撑，保障项目顺利实施。",
        introduce2: "组学技术中心简介",
        introduce2Info1: "组学技术研究中心成立于2018年，专注于生物组学大数据的研究与应用，致力于推动BT（生物技术）与IT（信息技术）的深度融合。中心汇聚了3个农科院创新团队、12个课题组以及多名高层次人才，包括国家优青、农科院“领军人才”和深圳市高层次人才，在基因组学、算法开发和育种研究等领域具有深厚积累。",
        introduce2Info2: "中心的研究方向涵盖AI赋能的多组学算法开发、高通量测序技术研发以及农业生物性状识别与解析。代表性成果包括三代序列组装算法（如WTDBG2、SMARTdenovo）、基于泛基因组的标记筛选工具（PanMarker），以及新型DNA断裂检测技术（DEtail-seq）。这些技术为基因组复杂区域的精准解析和功能注释提供了重要支持。",
        introduce2Info3: "围绕《“十四五”生物经济发展规划》，中心聚焦农业组学大数据驱动的基因组设计育种技术，助力农业高质量发展。通过整合多组学数据，构建协同调控网络，挖掘核心基因群，为中心在农业育种、疾病研究等领域的应用奠定了坚实基础。中心将继续以技术创新为核心，推动生命科学与现代农业的进步。",
        introduce3: "课题组简介",
        introduce3Info1: "潘玮华，研究员，博士生导师。2019年获美国加州大学河滨分校计算机科学博士学位和统计学硕士学位。2019-2020年在美国卡内基梅隆大学计算机学院计算生物学系担任Lane Fellow（博士后）。长期从事基因组学，尤其是基因组序列分析相关的生物信息算法研究。主要成果发表在顶级会议RECOMB、ISMB和专业期刊Genome Research、Plant Physiology、National Science Review、Molecular Plant、Bioinformatics、Genomics Proteomics & Bioinformatics等。主持国家自然科学基金面上项目、青年科学基金项目、深圳市优秀科技创新人才培养项目等科研项目。担任中国生物信息学学会（筹）生物信息算法专委会委员、中国生物工程学会计算生物学与生物信息学专委会委员等。担任Frontiers in Plant Science和Genes等期刊客座编辑。",
        joinUs: "加入我们",
        recruit: "诚招博士后/科研助理，简历投递：",
        copyStatement: "© 2023 PanLab. All rights reserved.",
        join: "E-mail: ",
        email: "panweihua@caas.cn",
    },
};

// 获取当前语言
let currentLanguage = localStorage.getItem('language') || 'zh';

// 切换语言函数
function toggleLanguage() {
    currentLanguage = currentLanguage === "zh" ? "en" : "zh";
    localStorage.setItem('language', currentLanguage); // 保存语言状态
    updateContent();
}

// 更新页面内容
function updateContent() {
    document.querySelectorAll("[data-lang-key]").forEach((element) => {
        const key = element.getAttribute("data-lang-key");
        if (translations[currentLanguage][key]) {
            element.textContent = translations[currentLanguage][key];
        }
    });

    // 特殊处理带链接的文本
    const contactInfoElement = document.querySelector('[data-lang-key="join"]');
    if (contactInfoElement) {
        const emailLink = '<a href="mailto:panweihua@caas.cn">panweihua@caas.cn</a>';
        contactInfoElement.innerHTML =
            translations[currentLanguage].join + emailLink;
    }

    // 更新按钮文字
    document.getElementById("language-toggle").textContent =
        currentLanguage === "zh" ? "Switch to English" : "切换到中文";
}

// 绑定按钮事件
document.getElementById("switch-language").addEventListener("click", toggleLanguage);

// 初始化页面内容
updateContent();