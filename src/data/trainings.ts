export interface LocalizedTraining {
	title: string;
	summary: string;
	audience: string;
	prerequisites: string;
	topics: string[];
	outcomes: string[];
}

export interface Training {
	slug: string;
	code: string;
	duration: number;
	level: 'Foundation' | 'Intermediate' | 'Advanced';
	en: LocalizedTraining;
	tr: LocalizedTraining;
}

const technicalAudience = {
	en: 'Software development, system administration and DevOps teams, plus technical leaders',
	tr: 'Yazılım geliştirme, sistem yönetimi ve DevOps ekipleri ile bu alanlardaki teknik yöneticiler',
};

export const trainings: Training[] = [
	{
		slug: 'cloud-native-application-development-foundations', code: 'TT122-CNUGT', duration: 2, level: 'Foundation',
		en: { title: 'Cloud Native Application Development Foundations', summary: 'Build a shared language around Cloud Native and DevOps before starting a transformation.', audience: technicalAudience.en, prerequisites: 'None', topics: ['DevOps and Cloud Native terminology', 'Microservice and application patterns', 'The Twelve-Factor App', 'Applied design workshop'], outcomes: ['Recognize core Cloud Native design choices', 'Evaluate application boundaries and dependencies', 'Apply foundational patterns in a team workshop'] },
		tr: { title: 'Cloud Native Uygulama Geliştirme Temelleri', summary: 'Dönüşüm öncesinde Cloud Native ve DevOps alanlarında ortak bir teknik dil oluşturun.', audience: technicalAudience.tr, prerequisites: 'Yok', topics: ['DevOps ve Cloud Native terminolojisi', 'Mikroservis ve uygulama paternleri', 'The Twelve-Factor App', 'Uygulamalı tasarım atölyesi'], outcomes: ['Temel Cloud Native tasarım kararlarını tanımak', 'Uygulama sınırlarını ve bağımlılıklarını değerlendirmek', 'Temel paternleri ekip çalışmasında uygulamak'] },
	},
	{
		slug: 'devops-methodology-fundamentals', code: 'TY111-DMTK', duration: 1, level: 'Foundation',
		en: { title: 'DevOps Methodology and Fundamental Concepts', summary: 'Understand the principles, metrics and collaboration model behind effective DevOps.', audience: 'Technical teams and business unit leaders', prerequisites: 'None', topics: ['DevOps principles and culture', 'Value streams and feedback loops', 'DORA metrics', 'Organizational collaboration'], outcomes: ['Distinguish DevOps from a toolchain', 'Map a delivery value stream', 'Identify measurable improvement opportunities'] },
		tr: { title: 'DevOps Metodolojisi ve Temel Kavramlar', summary: 'Etkili DevOps pratiğinin arkasındaki ilkeleri, metrikleri ve işbirliği modelini anlayın.', audience: 'Teknik ekipler ve birim yöneticileri', prerequisites: 'Yok', topics: ['DevOps ilkeleri ve kültürü', 'Değer akışları ve geri bildirim döngüleri', 'DORA metrikleri', 'Organizasyonel işbirliği'], outcomes: ['DevOps’u araç zincirinden ayırmak', 'Teslimat değer akışını haritalamak', 'Ölçülebilir iyileştirme alanlarını belirlemek'] },
	},
	{
		slug: 'docker-container-technologies', code: 'TT224-DCTE', duration: 4, level: 'Intermediate',
		en: { title: 'Docker and Container Technologies', summary: 'Package, secure and operate applications consistently with production-grade container practices.', audience: technicalAudience.en, prerequisites: 'Basic Linux shell and networking knowledge', topics: ['Images, containers and registries', 'Dockerfile design and build cache', 'Networking and persistent data', 'Security and production operations'], outcomes: ['Build small and reproducible images', 'Troubleshoot container networking and storage', 'Apply container security controls'] },
		tr: { title: 'Docker ve Container Teknolojileri Uzmanlık', summary: 'Uygulamaları production seviyesinde container pratikleriyle tutarlı şekilde paketleyin, güvenliğini sağlayın ve işletin.', audience: technicalAudience.tr, prerequisites: 'Temel Linux shell ve network bilgisi', topics: ['Image, container ve registry yapıları', 'Dockerfile tasarımı ve build cache', 'Network ve kalıcı veri', 'Güvenlik ve production operasyonu'], outcomes: ['Küçük ve tekrar üretilebilir image oluşturmak', 'Container network ve storage sorunlarını çözmek', 'Container güvenlik kontrollerini uygulamak'] },
	},
	{
		slug: 'introduction-to-kubernetes', code: 'TT224-KG', duration: 4, level: 'Intermediate',
		en: { title: 'Introduction to Kubernetes', summary: 'Deploy and operate containerized workloads using the core Kubernetes architecture and APIs.', audience: technicalAudience.en, prerequisites: 'Basic Linux, networking and container knowledge', topics: ['Cluster architecture and workloads', 'Services, ingress and configuration', 'Storage and scheduling', 'Operations and troubleshooting'], outcomes: ['Deploy resilient workloads', 'Expose and configure applications safely', 'Diagnose common cluster and workload failures'] },
		tr: { title: 'Kubernetes’e Giriş', summary: 'Temel Kubernetes mimarisi ve API’leriyle container iş yüklerini dağıtın ve yönetin.', audience: technicalAudience.tr, prerequisites: 'Temel Linux, network ve container bilgisi', topics: ['Cluster mimarisi ve workload’lar', 'Service, ingress ve konfigürasyon', 'Storage ve scheduling', 'Operasyon ve troubleshooting'], outcomes: ['Dayanıklı workload dağıtmak', 'Uygulamaları güvenli şekilde yayınlamak ve yapılandırmak', 'Yaygın cluster ve workload hatalarını teşhis etmek'] },
	},
	{
		slug: 'azure-cloud-infrastructure', code: 'TT226-AZBBATY', duration: 6, level: 'Intermediate',
		en: { title: 'Microsoft Azure Cloud Infrastructure', summary: 'Design and operate secure, scalable infrastructure on Microsoft Azure.', audience: technicalAudience.en, prerequisites: 'Basic Linux, networking and virtualization knowledge', topics: ['Identity and governance', 'Virtual networks and compute', 'Storage and managed services', 'Monitoring, security and cost'], outcomes: ['Design a governed Azure foundation', 'Select appropriate infrastructure services', 'Operate workloads with security and cost visibility'] },
		tr: { title: 'Azure Bulut Bilişim Altyapılarının Tasarım ve Yönetimi', summary: 'Microsoft Azure üzerinde güvenli ve ölçeklenebilir altyapılar tasarlayın ve yönetin.', audience: technicalAudience.tr, prerequisites: 'Temel Linux, network ve sanallaştırma bilgisi', topics: ['Identity ve governance', 'Virtual network ve compute', 'Storage ve managed services', 'Monitoring, güvenlik ve maliyet'], outcomes: ['Yönetilen bir Azure temeli tasarlamak', 'Uygun altyapı servislerini seçmek', 'Workload’ları güvenlik ve maliyet görünürlüğüyle işletmek'] },
	},
	{
		slug: 'aws-cloud-infrastructure', code: 'TT226-AWBBATY', duration: 6, level: 'Intermediate',
		en: { title: 'AWS Cloud Infrastructure', summary: 'Design and operate reliable cloud foundations with core AWS services and architecture practices.', audience: technicalAudience.en, prerequisites: 'Basic Linux, networking and virtualization knowledge', topics: ['IAM and multi-account governance', 'VPC, compute and load balancing', 'Storage and database choices', 'Observability, security and cost'], outcomes: ['Design a governed AWS foundation', 'Build resilient application infrastructure', 'Apply operational and cost controls'] },
		tr: { title: 'AWS Bulut Bilişim Altyapılarının Tasarım ve Yönetimi', summary: 'Temel AWS servisleri ve mimari pratiklerle güvenilir cloud altyapıları tasarlayın ve yönetin.', audience: technicalAudience.tr, prerequisites: 'Temel Linux, network ve sanallaştırma bilgisi', topics: ['IAM ve multi-account governance', 'VPC, compute ve load balancing', 'Storage ve database seçimleri', 'Observability, güvenlik ve maliyet'], outcomes: ['Yönetilen bir AWS temeli tasarlamak', 'Dayanıklı uygulama altyapısı kurmak', 'Operasyon ve maliyet kontrollerini uygulamak'] },
	},
	{
		slug: 'terraform-infrastructure-as-code', code: 'TT124-TIAC', duration: 4, level: 'Intermediate',
		en: { title: 'Infrastructure as Code with Terraform', summary: 'Create reusable, testable and governed infrastructure workflows with Terraform.', audience: technicalAudience.en, prerequisites: 'Basic cloud infrastructure and command-line knowledge', topics: ['Terraform language and state', 'Modules and composition', 'Remote workflows and collaboration', 'Testing, policy and delivery pipelines'], outcomes: ['Build reusable Terraform modules', 'Manage state and change safely', 'Integrate infrastructure into delivery workflows'] },
		tr: { title: 'Terraform ile Infrastructure as Code', summary: 'Terraform ile tekrar kullanılabilir, test edilebilir ve yönetilebilir altyapı iş akışları oluşturun.', audience: technicalAudience.tr, prerequisites: 'Temel cloud altyapısı ve komut satırı bilgisi', topics: ['Terraform dili ve state', 'Module ve composition', 'Remote workflow ve işbirliği', 'Test, policy ve delivery pipeline'], outcomes: ['Tekrar kullanılabilir Terraform module’leri oluşturmak', 'State ve değişiklikleri güvenli yönetmek', 'Altyapıyı teslimat akışlarına entegre etmek'] },
	},
	{
		slug: 'cloud-native-hackathon', code: 'TT223-CNH', duration: 3, level: 'Advanced',
		en: { title: 'Cloud Native Hackathon', summary: 'Turn Cloud Native knowledge into a working solution under realistic team and delivery constraints.', audience: technicalAudience.en, prerequisites: 'Linux, networking, containers and basic Kubernetes knowledge', topics: ['Architecture challenge', 'Team delivery and automation', 'Observability and resilience', 'Demo and technical review'], outcomes: ['Make architecture trade-offs as a team', 'Deliver a working Cloud Native system', 'Receive evidence-based technical feedback'] },
		tr: { title: 'Cloud Native Hackathon', summary: 'Cloud Native bilgisini gerçekçi ekip ve teslimat kısıtları altında çalışan bir çözüme dönüştürün.', audience: technicalAudience.tr, prerequisites: 'Linux, network, container ve temel Kubernetes bilgisi', topics: ['Mimari challenge', 'Ekip teslimatı ve otomasyon', 'Observability ve dayanıklılık', 'Demo ve teknik değerlendirme'], outcomes: ['Ekip olarak mimari trade-off kararları vermek', 'Çalışan bir Cloud Native sistem teslim etmek', 'Kanıta dayalı teknik geri bildirim almak'] },
	},
	{
		slug: 'git-github-actions', code: 'TT124-GGGA', duration: 4, level: 'Intermediate',
		en: { title: 'Git, GitHub and GitHub Actions', summary: 'Build a modern collaboration and delivery workflow around Git, GitHub and automation.', audience: technicalAudience.en, prerequisites: 'Basic command-line and software delivery knowledge', topics: ['Git history and collaboration', 'Pull requests and branch protection', 'GitHub Actions workflows', 'Security and reusable automation'], outcomes: ['Use Git confidently in team workflows', 'Design effective repository governance', 'Automate build, test and deployment'] },
		tr: { title: 'Git, GitHub ve GitHub Actions', summary: 'Git, GitHub ve otomasyon çevresinde modern bir işbirliği ve teslimat akışı oluşturun.', audience: technicalAudience.tr, prerequisites: 'Temel komut satırı ve yazılım teslimatı bilgisi', topics: ['Git history ve işbirliği', 'Pull request ve branch protection', 'GitHub Actions workflow’ları', 'Güvenlik ve tekrar kullanılabilir otomasyon'], outcomes: ['Ekip akışlarında Git’i güvenle kullanmak', 'Etkili repository governance tasarlamak', 'Build, test ve deployment süreçlerini otomatikleştirmek'] },
	},
	{
		slug: 'azure-devops-foundations', code: 'TT123-ADT', duration: 3, level: 'Intermediate',
		en: { title: 'Azure DevOps Foundations', summary: 'Plan work, manage source and automate delivery with Azure DevOps services.', audience: 'Software development and DevOps teams', prerequisites: 'Software development and DevOps fundamentals', topics: ['Azure Boards and delivery planning', 'Azure Repos and collaboration', 'Azure Pipelines', 'Artifacts, environments and approvals'], outcomes: ['Connect planning to delivery', 'Create maintainable Azure Pipelines', 'Apply environment governance and approvals'] },
		tr: { title: 'Azure DevOps Temelleri', summary: 'Azure DevOps servisleriyle işi planlayın, kaynak kodunu yönetin ve teslimatı otomatikleştirin.', audience: 'Yazılım geliştirme ve DevOps ekipleri', prerequisites: 'Yazılım geliştirme ve DevOps temelleri', topics: ['Azure Boards ve teslimat planlama', 'Azure Repos ve işbirliği', 'Azure Pipelines', 'Artifact, environment ve approval'], outcomes: ['Planlama ile teslimatı ilişkilendirmek', 'Sürdürülebilir Azure Pipeline’ları oluşturmak', 'Environment governance ve approval uygulamak'] },
	},
];
