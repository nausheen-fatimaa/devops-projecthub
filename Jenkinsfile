pipeline {
    agent any

    stages {

        stage('Verify Jenkins Workspace') {
            steps {
                echo '======================================'
                echo 'JENKINS WORKSPACE'
                echo '======================================'

                bat 'cd'
                bat 'dir'

                echo '======================================'
                echo 'PACKAGE FILES'
                echo '======================================'

                bat 'dir package*.json'

                echo '======================================'
                echo 'GIT INFORMATION'
                echo '======================================'

                bat 'git remote -v'
                bat 'git branch'
                bat 'git log -1 --oneline'
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm ci'
            }
        }

        stage('Build') {
            steps {
                bat 'npm run build'
            }
        }

        stage('Test') {
            steps {
                echo 'Tests will be added in Step 6.'
            }
        }
    }

    post {

        success {
            echo '======================================'
            echo 'PROJECTHUB PIPELINE SUCCESSFUL'
            echo '======================================'
        }

        failure {
            echo '======================================'
            echo 'PROJECTHUB PIPELINE FAILED'
            echo '======================================'
        }
    }
}