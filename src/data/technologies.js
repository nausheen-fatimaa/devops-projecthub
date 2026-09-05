
export const technologies = [

  /* =====================================================
     LINUX
  ===================================================== */

  {
    id: "linux",
    name: "Linux",
    category: "Operating System",
    color: "linux",
    icon: "🐧",

    description:
      "Linux administration, server management, shell scripting and troubleshooting for DevOps environments.",

    skills: [
      "Linux Administration",
      "File System Management",
      "Users & Groups",
      "Permissions",
      "Process Management",
      "Package Management",
      "SSH",
      "Shell Commands",
      "Bash Scripting",
      "System Monitoring",
    ],

    workflow: [
      "Install and configure Linux server",
      "Create users and groups",
      "Configure file permissions",
      "Manage packages and services",
      "Configure SSH access",
      "Monitor system resources",
      "Automate tasks with Bash scripts",
    ],

    commands: [
      "pwd",
      "ls -la",
      "cd /var/log",
      "sudo apt update",
      "sudo apt install nginx",
      "systemctl status nginx",
      "systemctl restart nginx",
      "ps aux",
      "top",
      "df -h",
      "free -m",
      "chmod 755 script.sh",
      "chown user:user file",
      "ssh user@server",
    ],
  },


  /* =====================================================
     GIT
  ===================================================== */

  {
    id: "git",
    name: "Git",
    category: "Version Control",
    color: "git",
    icon: "🌿",

    description:
      "Git version control for managing source code, branches, commits and collaborative DevOps workflows.",

    skills: [
      "Repositories",
      "Commits",
      "Branches",
      "Merging",
      "Rebasing",
      "Remote Repositories",
      "Conflict Resolution",
      "Git Tags",
      "Git Logs",
      "Git Workflows",
    ],

    workflow: [
      "Initialize repository",
      "Create feature branch",
      "Develop application changes",
      "Commit changes",
      "Push branch to remote",
      "Create pull request",
      "Merge changes",
      "Tag stable release",
    ],

    commands: [
      "git init",
      "git status",
      "git add .",
      'git commit -m "Initial commit"',
      "git branch",
      "git checkout -b feature",
      "git switch main",
      "git merge feature",
      "git pull",
      "git push",
      "git log --oneline",
      "git diff",
      "git stash",
      "git tag v1.0.0",
    ],
  },


  /* =====================================================
     GITHUB
  ===================================================== */

  {
    id: "github",
    name: "GitHub",
    category: "Code Hosting",
    color: "github",
    icon: "🐙",

    description:
      "GitHub for source-code hosting, collaboration, pull requests, project management and DevOps workflows.",

    skills: [
      "Repositories",
      "Branches",
      "Pull Requests",
      "Issues",
      "GitHub Actions",
      "Secrets",
      "Webhooks",
      "Code Review",
      "README Documentation",
      "CI/CD",
    ],

    workflow: [
      "Create GitHub repository",
      "Push source code",
      "Create feature branch",
      "Open pull request",
      "Review code",
      "Run CI pipeline",
      "Merge pull request",
      "Deploy application",
    ],

    commands: [
      "git remote -v",
      "git remote add origin <url>",
      "git push -u origin main",
      "git pull origin main",
      "git checkout -b feature",
      "git push origin feature",
    ],
  },


  /* =====================================================
     AWS
  ===================================================== */

  {
    id: "aws",
    name: "AWS",
    category: "Cloud",
    color: "aws",
    icon: "☁️",

    description:
      "Amazon Web Services for building, deploying and managing scalable cloud infrastructure.",

    skills: [
      "EC2",
      "VPC",
      "IAM",
      "S3",
      "Security Groups",
      "Load Balancer",
      "Auto Scaling",
      "CloudWatch",
      "Route 53",
      "Cloud Architecture",
    ],

    workflow: [
      "Create AWS account and IAM user",
      "Design VPC architecture",
      "Create EC2 instances",
      "Configure security groups",
      "Deploy application",
      "Configure load balancing",
      "Enable monitoring",
      "Scale infrastructure",
    ],

    commands: [
      "aws configure",
      "aws sts get-caller-identity",
      "aws ec2 describe-instances",
      "aws s3 ls",
      "aws s3 cp file.txt s3://bucket/",
      "aws iam list-users",
      "aws cloudwatch list-metrics",
    ],
  },


  /* =====================================================
     JENKINS
  ===================================================== */

  {
    id: "jenkins",
    name: "Jenkins",
    category: "CI/CD",
    color: "jenkins",
    icon: "🔨",

    description:
      "Jenkins automation server for continuous integration, continuous delivery and automated deployment pipelines.",

    skills: [
      "CI/CD Pipelines",
      "Freestyle Jobs",
      "Pipeline Jobs",
      "Jenkinsfile",
      "Build Automation",
      "Maven Integration",
      "Git Integration",
      "Credentials",
      "Webhooks",
      "Deployment Automation",
    ],

    workflow: [
      "Developer pushes code",
      "GitHub webhook triggers Jenkins",
      "Jenkins checks out source code",
      "Build application",
      "Run tests",
      "Create artifact",
      "Build Docker image",
      "Deploy application",
    ],

    commands: [
      "jenkins --version",
      "mvn clean package",
      "git checkout main",
      "git pull",
      "docker build -t app:latest .",
      "docker push app:latest",
    ],
  },


  /* =====================================================
     MAVEN
  ===================================================== */

  {
    id: "maven",
    name: "Maven",
    category: "Build Tool",
    color: "maven",
    icon: "📦",

    description:
      "Apache Maven for Java project dependency management, building, testing and packaging.",

    skills: [
      "pom.xml",
      "Dependencies",
      "Build Lifecycle",
      "Maven Plugins",
      "Packaging",
      "Testing",
      "WAR Files",
      "JAR Files",
      "Repositories",
      "Build Automation",
    ],

    workflow: [
      "Configure pom.xml",
      "Add dependencies",
      "Compile source code",
      "Run unit tests",
      "Package application",
      "Generate artifact",
      "Deploy artifact",
    ],

    commands: [
      "mvn -version",
      "mvn clean",
      "mvn compile",
      "mvn test",
      "mvn package",
      "mvn clean package",
      "mvn install",
      "mvn clean install",
    ],
  },


  /* =====================================================
     DOCKER
  ===================================================== */

  {
    id: "docker",
    name: "Docker",
    category: "Containerization",
    color: "docker",
    icon: "🐳",

    description:
      "Docker for containerizing applications and creating portable, consistent development and deployment environments.",

    skills: [
      "Images",
      "Containers",
      "Dockerfile",
      "Docker Compose",
      "Volumes",
      "Networks",
      "Registries",
      "Container Logs",
      "Image Management",
      "Container Security",
    ],

    workflow: [
      "Create Dockerfile",
      "Build Docker image",
      "Run container",
      "Configure ports",
      "Attach volumes",
      "Create Docker network",
      "Push image to registry",
      "Deploy container",
    ],

    commands: [
      "docker --version",
      "docker images",
      "docker ps",
      "docker ps -a",
      "docker build -t myapp:latest .",
      "docker run -d -p 8080:8080 myapp",
      "docker stop <container>",
      "docker rm <container>",
      "docker logs <container>",
      "docker exec -it <container> bash",
      "docker pull nginx",
      "docker push username/myapp:latest",
    ],
  },


  /* =====================================================
     KUBERNETES
  ===================================================== */

  {
    id: "kubernetes",
    name: "Kubernetes",
    category: "Container Orchestration",
    color: "kubernetes",
    icon: "☸️",

    description:
      "Kubernetes for container orchestration, deployment, scaling, service discovery and production workloads.",

    skills: [
      "Pods",
      "Deployments",
      "Services",
      "Namespaces",
      "ConfigMaps",
      "Secrets",
      "Ingress",
      "Persistent Volumes",
      "ReplicaSets",
      "Horizontal Pod Autoscaling",
    ],

    workflow: [
      "Create Kubernetes cluster",
      "Create namespace",
      "Create deployment",
      "Deploy application",
      "Expose application using Service",
      "Configure ConfigMap and Secrets",
      "Configure Ingress",
      "Scale application",
      "Monitor workloads",
    ],

    commands: [
      "kubectl version",
      "kubectl get nodes",
      "kubectl get pods",
      "kubectl get pods -A",
      "kubectl get deployments",
      "kubectl get services",
      "kubectl apply -f deployment.yaml",
      "kubectl delete -f deployment.yaml",
      "kubectl describe pod <pod>",
      "kubectl logs <pod>",
      "kubectl exec -it <pod> -- bash",
      "kubectl scale deployment app --replicas=3",
    ],
  },


  /* =====================================================
     ANSIBLE
  ===================================================== */

  {
    id: "ansible",
    name: "Ansible",
    category: "Configuration Management",
    color: "ansible",
    icon: "⚙️",

    description:
      "Ansible for configuration management, server provisioning, application deployment and infrastructure automation.",

    skills: [
      "Inventory",
      "Playbooks",
      "Ad-Hoc Commands",
      "Modules",
      "Variables",
      "Handlers",
      "Roles",
      "Templates",
      "Ansible Vault",
      "Configuration Management",
    ],

    workflow: [
      "Create Ansible inventory",
      "Configure SSH connectivity",
      "Write playbook",
      "Define tasks and modules",
      "Configure variables",
      "Run playbook",
      "Use handlers for services",
      "Organize automation with roles",
    ],

    commands: [
      "ansible --version",
      "ansible all --list-hosts",
      "ansible all -m ping",
      "ansible all -m setup",
      "ansible all -m shell -a 'uptime'",
      "ansible-playbook site.yml",
      "ansible-playbook -i inventory site.yml",
      "ansible-playbook --check site.yml",
      "ansible-galaxy init role_name",
      "ansible-vault create secrets.yml",
    ],
  },


  /* =====================================================
     TERRAFORM
  ===================================================== */

  {
    id: "terraform",
    name: "Terraform",
    category: "Infrastructure as Code",
    color: "terraform",
    icon: "🏗️",

    description:
      "Terraform for Infrastructure as Code, cloud resource provisioning and repeatable infrastructure automation.",

    skills: [
      "Infrastructure as Code",
      "Providers",
      "Resources",
      "Variables",
      "Outputs",
      "Modules",
      "State Management",
      "Terraform Cloud",
      "Remote State",
      "Infrastructure Automation",
    ],

    workflow: [
      "Install Terraform",
      "Configure provider",
      "Define infrastructure",
      "Initialize Terraform",
      "Validate configuration",
      "Create execution plan",
      "Apply infrastructure",
      "Manage Terraform state",
      "Destroy unused infrastructure",
    ],

    commands: [
      "terraform --version",
      "terraform init",
      "terraform fmt",
      "terraform validate",
      "terraform plan",
      "terraform apply",
      "terraform apply -auto-approve",
      "terraform show",
      "terraform state list",
      "terraform output",
      "terraform destroy",
    ],
  },


  /* =====================================================
     PYTHON
  ===================================================== */

  {
    id: "python",
    name: "Python",
    category: "Programming & Automation",
    color: "python",
    icon: "🐍",

    description:
      "Python for DevOps scripting, automation, API integration, infrastructure utilities and application development.",

    skills: [
      "Python Fundamentals",
      "Functions",
      "Modules",
      "File Handling",
      "Exception Handling",
      "Virtual Environments",
      "Automation Scripts",
      "REST APIs",
      "JSON",
      "DevOps Automation",
    ],

    workflow: [
      "Write Python automation script",
      "Create virtual environment",
      "Install dependencies",
      "Read configuration files",
      "Interact with APIs",
      "Automate DevOps tasks",
      "Handle errors",
      "Schedule scripts",
    ],

    commands: [
      "python --version",
      "python script.py",
      "python -m venv venv",
      "venv\\Scripts\\activate",
      "pip install requests",
      "pip freeze",
      "pip install -r requirements.txt",
      "python -m pip list",
    ],
  },


  /* =====================================================
     PROMETHEUS
  ===================================================== */

  {
    id: "prometheus",
    name: "Prometheus",
    category: "Monitoring",
    color: "prometheus",
    icon: "🔥",

    description:
      "Prometheus monitoring and time-series database for collecting infrastructure and application metrics.",

    skills: [
      "Metrics",
      "PromQL",
      "Targets",
      "Exporters",
      "Alerting",
      "Service Discovery",
      "Node Exporter",
      "Dashboards",
      "Time Series",
      "Monitoring",
    ],

    workflow: [
      "Install Prometheus",
      "Configure scrape targets",
      "Collect metrics",
      "Query metrics using PromQL",
      "Configure exporters",
      "Create alerts",
      "Connect visualization tools",
    ],

    commands: [
      "prometheus --version",
      "promtool check config prometheus.yml",
      "systemctl status prometheus",
    ],
  },


  /* =====================================================
     GRAFANA
  ===================================================== */

  {
    id: "grafana",
    name: "Grafana",
    category: "Monitoring & Visualization",
    color: "grafana",
    icon: "📊",

    description:
      "Grafana for visualizing metrics, creating dashboards and monitoring DevOps infrastructure.",

    skills: [
      "Dashboards",
      "Data Sources",
      "Prometheus Integration",
      "Queries",
      "Alerts",
      "Visualization",
      "Monitoring",
      "Infrastructure Dashboards",
    ],

    workflow: [
      "Install Grafana",
      "Configure data source",
      "Connect Prometheus",
      "Create dashboard",
      "Create panels",
      "Configure alerts",
      "Monitor infrastructure",
    ],

    commands: [
      "systemctl status grafana-server",
      "systemctl start grafana-server",
      "systemctl restart grafana-server",
    ],
  },

];
 
