export interface LocalizedService {
	title: string;
	summary: string;
	capabilities: string[];
	outcomes: string[];
}

export interface Service {
	slug: string;
	group: 'Cloud' | 'DevOps' | 'Platform' | 'Talent';
	color: 'yellow' | 'teal' | 'blue' | 'purple';
	en: LocalizedService;
	tr: LocalizedService;
}

export const services: Service[] = [
	{
		slug: 'cloud-cost-optimization', group: 'Cloud', color: 'yellow',
		en: { title: 'Cloud Cost Optimization', summary: 'Reduce cloud spend while protecting performance, resilience and delivery speed.', capabilities: ['Cost and usage assessment', 'Rightsizing and commitment strategy', 'FinOps governance and reporting'], outcomes: ['Clear ownership and cost visibility', 'Prioritized savings with measured impact', 'A repeatable optimization operating model'] },
		tr: { title: 'Bulut Maliyet Optimizasyonu', summary: 'Performans, dayanıklılık ve teslimat hızını korurken cloud harcamalarını azaltın.', capabilities: ['Maliyet ve kullanım değerlendirmesi', 'Rightsizing ve taahhüt stratejisi', 'FinOps governance ve raporlama'], outcomes: ['Net sahiplik ve maliyet görünürlüğü', 'Etkisi ölçülen öncelikli tasarruflar', 'Tekrarlanabilir optimizasyon işletim modeli'] },
	},
	{
		slug: 'infrastructure-modernization-cloud-migration', group: 'Cloud', color: 'yellow',
		en: { title: 'Infrastructure Modernization and Cloud Migration', summary: 'Modernize applications and infrastructure through a safe, measurable migration path.', capabilities: ['Portfolio and dependency assessment', 'Landing zone and migration design', 'Migration waves and modernization'], outcomes: ['Lower migration risk and disruption', 'Secure, governed cloud foundations', 'A roadmap tied to business outcomes'] },
		tr: { title: 'Altyapı Modernizasyonu ve Bulut Geçişi', summary: 'Uygulama ve altyapıları güvenli, ölçülebilir bir migration yoluyla modernize edin.', capabilities: ['Portföy ve bağımlılık değerlendirmesi', 'Landing zone ve migration tasarımı', 'Migration dalgaları ve modernizasyon'], outcomes: ['Daha düşük geçiş riski ve kesinti', 'Güvenli ve yönetilen cloud temeli', 'İş sonuçlarına bağlı yol haritası'] },
	},
	{
		slug: 'managed-cloud-services', group: 'Cloud', color: 'yellow',
		en: { title: 'Managed Cloud Services', summary: 'Operate AWS and Azure environments with proactive support, security and cost control.', capabilities: ['Monitoring and incident response', 'Configuration, backup and recovery', 'Security, compliance and cost operations'], outcomes: ['Reliable day-two cloud operations', 'Reduced operational load on product teams', 'Visible service health and improvement'] },
		tr: { title: 'Bulut Yönetim Hizmetleri', summary: 'AWS ve Azure ortamlarını proaktif destek, güvenlik ve maliyet kontrolüyle işletin.', capabilities: ['Monitoring ve incident response', 'Konfigürasyon, backup ve recovery', 'Güvenlik, uyum ve maliyet operasyonu'], outcomes: ['Güvenilir day-two cloud operasyonu', 'Ürün ekiplerinde azalan operasyon yükü', 'Görünür servis sağlığı ve iyileştirme'] },
	},
	{
		slug: 'devops-capability-assessment', group: 'DevOps', color: 'teal',
		en: { title: 'DevOps Capability Assessment', summary: 'Establish how work flows today and where engineering investment will create the most value.', capabilities: ['Value-stream and maturity assessment', 'DORA metrics and delivery baseline', 'Prioritized improvement roadmap'], outcomes: ['Evidence-based view of delivery performance', 'Shared priorities across teams', 'Measurable transformation goals'] },
		tr: { title: 'DevOps Yetenek Değerlendirmesi', summary: 'İşin bugün nasıl aktığını ve mühendislik yatırımının en fazla değeri nerede yaratacağını belirleyin.', capabilities: ['Değer akışı ve olgunluk değerlendirmesi', 'DORA metrikleri ve teslimat baseline', 'Öncelikli iyileştirme yol haritası'], outcomes: ['Teslimat performansının kanıta dayalı görünümü', 'Ekipler arasında ortak öncelikler', 'Ölçülebilir dönüşüm hedefleri'] },
	},
	{
		slug: 'ci-cd-design-implementation', group: 'DevOps', color: 'teal',
		en: { title: 'CI/CD Design and Implementation', summary: 'Build secure, maintainable delivery pipelines that shorten feedback and release cycles.', capabilities: ['Pipeline and branching design', 'Automated quality and security controls', 'Progressive delivery and environment governance'], outcomes: ['Faster, safer software releases', 'Reusable delivery standards', 'Lower change failure rate'] },
		tr: { title: 'CI/CD Tasarımı ve Uygulaması', summary: 'Geri bildirim ve release döngülerini kısaltan güvenli, sürdürülebilir delivery pipeline’ları kurun.', capabilities: ['Pipeline ve branching tasarımı', 'Otomatik kalite ve güvenlik kontrolleri', 'Progressive delivery ve environment governance'], outcomes: ['Daha hızlı ve güvenli release’ler', 'Tekrar kullanılabilir teslimat standartları', 'Daha düşük change failure rate'] },
	},
	{
		slug: 'devops-coaching', group: 'DevOps', color: 'teal',
		en: { title: 'DevOps Coaching', summary: 'Change delivery practices through pairing, facilitation and hands-on technical guidance.', capabilities: ['Team coaching and office hours', 'Practice design and adoption', 'Leadership and operating-model facilitation'], outcomes: ['Stronger internal decision-making', 'New practices applied to real work', 'Sustainable continuous improvement'] },
		tr: { title: 'DevOps Koçluğu', summary: 'Pairing, facilitation ve uygulamalı teknik rehberlikle teslimat pratiklerini değiştirin.', capabilities: ['Ekip koçluğu ve ofis saatleri', 'Pratik tasarımı ve adaptasyon', 'Liderlik ve işletim modeli facilitation'], outcomes: ['Daha güçlü iç karar verme yeteneği', 'Gerçek işe uygulanan yeni pratikler', 'Sürdürülebilir sürekli iyileştirme'] },
	},
	{
		slug: 'containerization-platform-management', group: 'Platform', color: 'blue',
		en: { title: 'Containerization and Platform Management', summary: 'Create a reliable container platform that gives teams a safe path to production.', capabilities: ['Container and Kubernetes architecture', 'Platform automation and self-service', 'Operations, observability and reliability'], outcomes: ['Consistent application delivery', 'Reduced platform toil', 'A scalable developer experience'] },
		tr: { title: 'Konteynerleştirme ve Platform Yönetimi', summary: 'Ekiplere production’a güvenli bir yol sunan güvenilir container platformu oluşturun.', capabilities: ['Container ve Kubernetes mimarisi', 'Platform otomasyonu ve self-service', 'Operasyon, observability ve güvenilirlik'], outcomes: ['Tutarlı uygulama teslimatı', 'Azalan platform toil', 'Ölçeklenebilir developer experience'] },
	},
	{
		slug: 'cloud-infrastructure-devops-security', group: 'Platform', color: 'blue',
		en: { title: 'Cloud, Infrastructure and DevOps Security', summary: 'Integrate security into cloud foundations, platforms and software delivery workflows.', capabilities: ['Cloud and platform security assessment', 'Identity, policy and supply-chain controls', 'DevSecOps automation and enablement'], outcomes: ['Security earlier in delivery', 'Consistent technical controls', 'Lower operational and compliance risk'] },
		tr: { title: 'Bulut, Altyapı ve DevOps Güvenliği', summary: 'Güvenliği cloud temellerine, platformlara ve yazılım teslimat akışlarına entegre edin.', capabilities: ['Cloud ve platform güvenlik değerlendirmesi', 'Identity, policy ve supply-chain kontrolleri', 'DevSecOps otomasyonu ve enablement'], outcomes: ['Teslimatta daha erken güvenlik', 'Tutarlı teknik kontroller', 'Daha düşük operasyon ve uyum riski'] },
	},
	{
		slug: 'data-management-analytics', group: 'Platform', color: 'blue',
		en: { title: 'Data Management and Analytics', summary: 'Build governed data foundations that turn operational data into usable insight.', capabilities: ['Data-platform and workload assessment', 'Architecture, integration and governance', 'Observability, quality and lifecycle management'], outcomes: ['Trusted and accessible data', 'Scalable analytics foundations', 'Clear governance and ownership'] },
		tr: { title: 'Veri Yönetimi ve Analitik', summary: 'Operasyonel veriyi kullanılabilir içgörüye dönüştüren yönetilen veri temelleri kurun.', capabilities: ['Data platformu ve workload değerlendirmesi', 'Mimari, entegrasyon ve governance', 'Observability, kalite ve lifecycle yönetimi'], outcomes: ['Güvenilir ve erişilebilir veri', 'Ölçeklenebilir analitik temeli', 'Net governance ve sahiplik'] },
	},
	{
		slug: 'outsourced-it-talent', group: 'Talent', color: 'purple',
		en: { title: 'Outsourced IT Talent', summary: 'Extend cloud and DevOps teams with engineers who can contribute in your operating context.', capabilities: ['Role and capability definition', 'Technical matching and onboarding', 'Delivery integration and ongoing support'], outcomes: ['Faster access to specialist capability', 'Lower onboarding risk', 'Flexible team capacity'] },
		tr: { title: 'Dış Kaynaklı BT Yetenekleri', summary: 'Cloud ve DevOps ekiplerini işletim bağlamınıza katkı sunabilen mühendislerle genişletin.', capabilities: ['Rol ve yetkinlik tanımı', 'Teknik eşleştirme ve onboarding', 'Teslimat entegrasyonu ve sürekli destek'], outcomes: ['Uzman yetkinliğe daha hızlı erişim', 'Daha düşük onboarding riski', 'Esnek ekip kapasitesi'] },
	},
	{
		slug: 'headhunting', group: 'Talent', color: 'purple',
		en: { title: 'Technical Headhunting', summary: 'Find and assess specialist cloud, platform and DevOps professionals.', capabilities: ['Role calibration and market mapping', 'Technical screening and structured assessment', 'Candidate and hiring-process support'], outcomes: ['A stronger qualified candidate pool', 'Evidence-based hiring decisions', 'Reduced time spent by engineering leaders'] },
		tr: { title: 'Teknik Headhunting', summary: 'Cloud, platform ve DevOps alanlarında uzman profesyonelleri bulun ve değerlendirin.', capabilities: ['Rol kalibrasyonu ve pazar haritalama', 'Teknik screening ve yapılandırılmış değerlendirme', 'Aday ve işe alım süreci desteği'], outcomes: ['Daha güçlü nitelikli aday havuzu', 'Kanıta dayalı işe alım kararları', 'Teknik liderler için azalan zaman yükü'] },
	},
	{
		slug: 'technology-outsourcing', group: 'Talent', color: 'purple',
		en: { title: 'Technology Outsourcing', summary: 'Add accountable technical delivery capacity without building every capability internally.', capabilities: ['Scope and delivery-model design', 'Managed engineering capacity', 'Governance, reporting and knowledge transfer'], outcomes: ['Predictable delivery capacity', 'Access to multidisciplinary expertise', 'Knowledge retained by the organization'] },
		tr: { title: 'Teknoloji Dış Kaynak Kullanımı', summary: 'Her yetkinliği içeride kurmadan sorumluluk alan teknik teslimat kapasitesi ekleyin.', capabilities: ['Kapsam ve teslimat modeli tasarımı', 'Yönetilen mühendislik kapasitesi', 'Governance, raporlama ve bilgi transferi'], outcomes: ['Öngörülebilir teslimat kapasitesi', 'Çok disiplinli uzmanlığa erişim', 'Organizasyonda kalan bilgi'] },
	},
];
