
pipeline {
    agent any

    stages {
        stage('Install Dependencies') {
            steps {
                echo 'Installing testing dependencies...'
                bat 'npm ci'
                echo 'Dependencies installed successfully!'
            }
        }

        stage('Unit Testing') {
            steps {
                echo 'Running unit tests...'
                bat 'npm run test:unit'
            }
        }

        stage('Integration Testing') {
            steps {
                echo 'Running integration tests...'
                bat 'npm run test:integration'
            }
        }

        stage('Build') {
            steps {
                echo 'Building Docker image...'
                bat 'docker --version'
                bat 'docker build -t devops-app:1.0 .'
            }
        }
    }

    post {
        success {
            echo 'SUCCESS: All tests passed and Docker image built.'
        }

        failure {
            echo 'FAILURE: Check Jenkins Console Output.'
        }

        always {
            echo 'Jenkins pipeline execution finished.'
        }
    }
}
