pipeline {
    agent {
        kubernetes {
            inheritFrom 'agent-java'
            defaultContainer 'java'
            yamlMergeStrategy merge()

        }
    }
