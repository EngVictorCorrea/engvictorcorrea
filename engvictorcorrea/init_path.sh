#!/bin/bash

# Verifica se o diretório src/app existe
if [ ! -d "src/app" ]; then
  echo "Pasta src/app não encontrada. Certifique-se de estar no diretório correto."
  exit 1
fi

# Cria a estrutura de pastas no diretório src/app
echo "Criando estrutura de pastas no diretório src/app..."

mkdir -p src/app/core/guards
mkdir -p src/app/core/interceptors
mkdir -p src/app/core/services
mkdir -p src/app/core/models

mkdir -p src/app/features/feature-module1
mkdir -p src/app/features/feature-module2

mkdir -p src/app/shared/components
mkdir -p src/app/shared/directives
mkdir -p src/app/shared/pipes

# Cria a estrutura de assets
echo "Criando estrutura de pastas em src/assets..."

mkdir -p src/assets/images
mkdir -p src/assets/styles
mkdir -p src/assets/fonts

# Cria a estrutura de environments
echo "Criando estrutura de pastas em src/environments..."

mkdir -p src/environments

# Cria arquivos de exemplo
echo "Criando arquivos de exemplo..."

touch src/app/core/core.module.ts
touch src/app/shared/shared.module.ts
touch src/environments/environment.ts
touch src/environments/environment.prod.ts

echo "Estrutura de pastas criada com sucesso!"
