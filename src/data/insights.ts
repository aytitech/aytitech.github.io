export interface InsightCopy {
	title: string;
	excerpt: string;
	sections: { heading: string; body: string }[];
}

export interface Insight {
	slug: string;
	date: string;
	tags: string[];
	tr: InsightCopy;
	en: InsightCopy;
}

export const insights: Insight[] = [
	{
		slug: 'managed-cloud-services', date: '2025-09-01', tags: ['Cloud', 'Operations'],
		tr: { title: 'Bulut Yönetim Hizmetleri ile Dijital Altyapınızda Kontrol Sizde', excerpt: 'Karmaşıklaşan cloud ortamlarında güvenlik, maliyet ve operasyonu birlikte yönetmenin çerçevesi.', sections: [
			{ heading: 'Cloud büyüdükçe operasyon değişir', body: 'Cloud altyapısı genişledikçe kaynak envanteri, erişim yönetimi, maliyet görünürlüğü ve incident response aynı operasyon modelinin parçaları haline gelir. Tek tek araçlar değil, bu araçların birlikte nasıl işletildiği sonucu belirler.' },
			{ heading: 'Yönetilen hizmet ne sağlar?', body: 'Sürekli izleme, yapılandırma yönetimi, güvenlik kontrolleri, yedekleme ve maliyet optimizasyonu ortak bir ritim içinde yürütülür. İç ekipler rutin operasyon yerine ürün ve dönüşüm hedeflerine odaklanabilir.' },
			{ heading: 'Başarı ölçülebilir olmalı', body: 'Erişilebilirlik, müdahale süresi, değişiklik başarısızlık oranı ve birim maliyet gibi metrikler başlangıçta tanımlanmalıdır. İyi bir yönetim modeli yalnızca sistemi ayakta tutmaz, gelişimi görünür kılar.' },
		]},
		en: { title: 'Take Control of Your Digital Infrastructure with Managed Cloud Services', excerpt: 'A practical framework for managing security, cost and operations as cloud environments grow.', sections: [
			{ heading: 'Operations change as cloud grows', body: 'As cloud estates expand, inventory, access, cost visibility and incident response become parts of one operating model. Outcomes depend less on individual tools and more on how they are run together.' },
			{ heading: 'What managed services provide', body: 'Monitoring, configuration, security controls, backup and cost optimization run on a shared cadence. Internal teams can focus on products and transformation instead of repetitive operations.' },
			{ heading: 'Success must be measurable', body: 'Availability, response time, change failure rate and unit cost should be defined from the start. A sound model does more than keep systems running; it makes improvement visible.' },
		]},
	},
	{
		slug: 'infrastructure-modernization-cloud-migration', date: '2025-06-18', tags: ['Cloud', 'Modernization'],
		tr: { title: 'Altyapı Modernizasyonu ve Bulut Geçişi', excerpt: 'Cloud migration kararını teknoloji yenilemesinden iş sonucuna dönüştüren temel adımlar.', sections: [
			{ heading: 'Taşımadan önce anlayın', body: 'Başarılı dönüşüm mevcut uygulamaların bağımlılıklarını, operasyonel yükünü ve iş değerini anlamakla başlar. Her workload için aynı migration stratejisini kullanmak teknik borcu yalnızca yeni bir ortama taşır.' },
			{ heading: 'Doğru dönüşüm yolu', body: 'Rehost, replatform ve refactor seçenekleri risk, süre ve beklenen kazanıma göre değerlendirilmelidir. Landing zone, kimlik, ağ, gözlemlenebilirlik ve maliyet yönetişimi uygulamalardan önce hazır olmalıdır.' },
			{ heading: 'Geçiş bir bitiş değildir', body: 'Cloud migration sonrasında platform operasyonu, güvenlik ve maliyet düzenli olarak iyileştirilir. Ekip yetkinliği ve otomasyon, yatırımın sürdürülebilir olmasını sağlar.' },
		]},
		en: { title: 'Infrastructure Modernization and Cloud Migration', excerpt: 'The essential steps that turn cloud migration from a technology refresh into a business outcome.', sections: [
			{ heading: 'Understand before moving', body: 'Transformation starts by understanding dependencies, operational load and business value. Applying one migration strategy to every workload simply moves technical debt.' },
			{ heading: 'Choose the right path', body: 'Rehost, replatform and refactor should be evaluated by risk, time and expected value. Identity, networking, observability and cost governance must be ready before workloads arrive.' },
			{ heading: 'Migration is not the finish line', body: 'Platform operations, security and cost continue to improve after migration. Team capability and automation make the investment sustainable.' },
		]},
	},
	{
		slug: 'cloud-cost-optimization', date: '2025-06-04', tags: ['FinOps', 'Cloud'],
		tr: { title: 'Ayti.Tech ile Bulut Maliyet Optimizasyonu', excerpt: 'Cloud maliyetini kısmak yerine değer, sahiplik ve görünürlük üzerinden yönetmek.', sections: [
			{ heading: 'Fatura semptomdur', body: 'Yüksek cloud faturası çoğu zaman eksik sahiplik, ölçüsüz kapasite veya mimari kararların sonucudur. Yalnızca kaynak kapatmak kısa süreli tasarruf sağlarken ürün riskini artırabilir.' },
			{ heading: 'FinOps çalışma biçimidir', body: 'Etiketleme, bütçeler, birim ekonomi ve düzenli review ritmi finans, mühendislik ve ürün ekiplerini aynı veride buluşturur. Tasarruf sürekli bir mühendislik pratiğine dönüşür.' },
			{ heading: 'Optimizasyon dengedir', body: 'Reserved capacity, rightsizing ve autoscaling seçenekleri performans ve dayanıklılık hedefleriyle birlikte değerlendirilmelidir. En ucuz sistem değil, ürettiği değere göre en verimli sistem hedeflenir.' },
		]},
		en: { title: 'Cloud Cost Optimization with Ayti.Tech', excerpt: 'Manage cloud cost through value, ownership and visibility instead of blunt cost cutting.', sections: [
			{ heading: 'The bill is a symptom', body: 'High spend often reflects unclear ownership, unmeasured capacity or architecture decisions. Turning resources off may save briefly while increasing product risk.' },
			{ heading: 'FinOps is a way of working', body: 'Tagging, budgets, unit economics and recurring reviews bring finance, engineering and product onto the same data. Savings become an ongoing engineering practice.' },
			{ heading: 'Optimization is balance', body: 'Reserved capacity, rightsizing and autoscaling must be considered with performance and resilience. The goal is not the cheapest system, but the most efficient one for the value it creates.' },
		]},
	},
	{
		slug: 'cloud-devops-transformation', date: '2024-10-28', tags: ['DevOps', 'Transformation'],
		tr: { title: 'Ayti.Tech ile Bulut ve DevOps Dönüşümü', excerpt: 'Araç kurulumundan kültür, akış ve platform dönüşümüne uzanan bütüncül yaklaşım.', sections: [
			{ heading: 'Dönüşüm araç listesi değildir', body: 'CI/CD veya Kubernetes kurmak tek başına teslimat performansını değiştirmez. Organizasyon sınırları, geri bildirim döngüleri ve operasyon sorumluluğu teknik mimariyle birlikte ele alınmalıdır.' },
			{ heading: 'Küçük ve ölçülebilir başlayın', body: 'Temsil gücü yüksek bir ürün akışı seçilir, mevcut lead time ve hata oranları ölçülür. Yeni çalışma biçimi bu akışta kanıtlandıktan sonra tekrar kullanılabilir platform yeteneklerine dönüşür.' },
			{ heading: 'Yetkinliği içeride bırakın', body: 'Kalıcı dönüşüm dış ekibin ürettiği konfigürasyondan değil, iç ekibin kazandığı karar verme ve işletme yeteneğinden gelir. Eğitim ve birlikte çalışma teslimatın parçasıdır.' },
		]},
		en: { title: 'Cloud and DevOps Transformation with Ayti.Tech', excerpt: 'A holistic approach that goes beyond tools to culture, flow and platform capabilities.', sections: [
			{ heading: 'Transformation is not a tool list', body: 'Installing CI/CD or Kubernetes alone does not improve delivery. Team boundaries, feedback loops and operational ownership must change with architecture.' },
			{ heading: 'Start small and measurable', body: 'Select a representative product flow and measure lead time and failure rates. Once proven, the approach becomes reusable platform capabilities.' },
			{ heading: 'Leave capability behind', body: 'Lasting change comes from the internal team’s ability to decide and operate, not from configuration delivered by outsiders. Training and pairing are part of delivery.' },
		]},
	},
	{
		slug: 'ci-cd-failures', date: '2024-10-21', tags: ['CI/CD', 'DevOps'],
		tr: { title: 'DevOps Süreçleriniz Yavaş mı? CI/CD Hataları ve Çözüm Yolları', excerpt: 'Pipeline’ları yavaşlatan yaygın tasarım hataları ve daha güvenilir teslimat için pratik ilkeler.', sections: [
			{ heading: 'Pipeline bir ürün akışıdır', body: 'Uzun bekleme süreleri, kararsız testler ve manuel onaylar geliştirici geri bildirimini geciktirir. Pipeline adımlarının değeri ve süresi düzenli ölçülmelidir.' },
			{ heading: 'Hız ile güvenlik karşıt değildir', body: 'Küçük değişiklikler, otomatik politika kontrolleri ve aşamalı dağıtım hem teslimat hızını hem güvenliği artırır. Büyük release paketleri hata alanını genişletir.' },
			{ heading: 'Platform yaklaşımı', body: 'Ortak pipeline şablonları ve self-service yetenekler ekiplerin aynı problemleri tekrar çözmesini engeller. Standartlar zorunlu kapılar yerine iyi varsayımlar olarak sunulur.' },
		]},
		en: { title: 'Are Your DevOps Processes Slow? CI/CD Failure Patterns', excerpt: 'Common pipeline design mistakes and practical principles for more reliable delivery.', sections: [
			{ heading: 'A pipeline is a product flow', body: 'Long queues, flaky tests and manual approvals delay developer feedback. The value and duration of every pipeline step should be measured.' },
			{ heading: 'Speed and safety are allies', body: 'Small changes, automated policy checks and progressive delivery improve both speed and safety. Large release batches expand the failure surface.' },
			{ heading: 'Take a platform approach', body: 'Shared templates and self-service capabilities stop teams solving the same problems repeatedly. Standards become sensible defaults instead of mandatory gates.' },
		]},
	},
	{
		slug: 'cloud-migration-roadmap', date: '2024-10-14', tags: ['Cloud', 'Roadmap'],
		tr: { title: 'Bulut Geçişi Yapmak İsteyen Şirketler İçin Yol Haritası', excerpt: 'Cloud yolculuğunu keşif, temel platform, migration ve optimizasyon aşamalarına bölen yol haritası.', sections: [
			{ heading: 'Hedefi tanımlayın', body: 'Cloud migration için açık iş hedefleri belirlenmeden teknoloji seçimine geçilmemelidir. Hız, dayanıklılık, küresel erişim veya maliyet hedefleri farklı mimari kararlar üretir.' },
			{ heading: 'Temeli kurun', body: 'Landing zone, identity, network, security ve observability standartları ilk workload’dan önce kurulmalıdır. Infrastructure as Code tekrar üretilebilirlik ve denetlenebilirlik sağlar.' },
			{ heading: 'Dalgalarla ilerleyin', body: 'Uygulamalar bağımlılık ve risklerine göre migration dalgalarına ayrılır. Her dalgadan öğrenilenler sonraki planı günceller; optimizasyon geçişle birlikte başlar.' },
		]},
		en: { title: 'A Cloud Migration Roadmap for Organizations', excerpt: 'A roadmap that separates discovery, platform foundations, migration and optimization.', sections: [
			{ heading: 'Define the outcome', body: 'Do not choose technology before defining business goals. Speed, resilience, global reach and cost goals lead to different architecture decisions.' },
			{ heading: 'Build the foundation', body: 'Landing zone, identity, networking, security and observability should precede the first workload. Infrastructure as Code provides repeatability and auditability.' },
			{ heading: 'Move in waves', body: 'Group applications into migration waves by dependencies and risk. Lessons from each wave update the next plan; optimization starts during migration.' },
		]},
	},
	{
		slug: 'why-cloud-costs-grow', date: '2024-10-07', tags: ['FinOps', 'Governance'],
		tr: { title: 'Şirketinizin Bulut Maliyetleri Neden Kontrolden Çıkıyor?', excerpt: 'Kontrolsüz maliyetin teknik ve organizasyonel nedenleri, erken uyarı işaretleri ve çözüm yaklaşımı.', sections: [
			{ heading: 'Görünmeyen sahiplik', body: 'Kaynakların ürün, ekip ve ortamla ilişkilendirilememesi maliyet sorumluluğunu belirsizleştirir. Zorunlu metadata ve yaşam döngüsü politikaları temel görünürlüğü sağlar.' },
			{ heading: 'Talep ile kapasite arasındaki fark', body: 'Statik kapasite, unutulan geliştirme ortamları ve yanlış depolama katmanları faturayı büyütür. Kullanım metrikleri maliyet verisiyle birlikte değerlendirilmelidir.' },
			{ heading: 'Erken müdahale sistemi', body: 'Anomali alarmları, bütçe eşikleri ve ekip bazlı dashboard’lar sorunları fatura döneminden önce görünür kılar. Düzenli FinOps review kalıcı davranış değişikliği yaratır.' },
		]},
		en: { title: 'Why Are Your Cloud Costs Growing Out of Control?', excerpt: 'Technical and organizational causes of uncontrolled spend, warning signs and a practical response.', sections: [
			{ heading: 'Invisible ownership', body: 'When resources cannot be tied to products, teams and environments, cost accountability disappears. Required metadata and lifecycle policies establish visibility.' },
			{ heading: 'The gap between demand and capacity', body: 'Static capacity, forgotten development environments and wrong storage tiers increase bills. Usage metrics must be read together with cost data.' },
			{ heading: 'Build an early warning system', body: 'Anomaly alerts, budget thresholds and team dashboards expose problems before the billing cycle ends. Recurring FinOps reviews create lasting behavior change.' },
		]},
	},
];