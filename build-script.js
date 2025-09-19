#!/usr/bin/env node

import { execSync } from 'child_process';
import { copyFileSync, mkdirSync, existsSync, rmSync } from 'fs';
import path from 'path';

console.log('🚀 Iniciando build completo do projeto...');

try {
  // 1. Build do site principal
  console.log('📦 Fazendo build do site principal...');
  execSync('npm run build', { stdio: 'inherit' });

  // 2. Verificar se metodocalma já está buildado
  console.log('📦 Verificando build do metodocalma...');
  if (!existsSync('public/metodocalma/dist')) {
    console.log('⚠️  Pasta metodocalma/dist não encontrada, pulando...');
  } else {
    console.log('✅ Build do metodocalma já existe');
  }

  // 3. Copiar metodocalma para dist
  console.log('📁 Copiando metodocalma para dist...');
  
  const metodocalmaDistPath = 'dist/metodocalma';
  
  // Remove pasta se existir
  if (existsSync(metodocalmaDistPath)) {
    rmSync(metodocalmaDistPath, { recursive: true, force: true });
  }
  
  // Cria pasta metodocalma
  mkdirSync(metodocalmaDistPath, { recursive: true });
  
  // Copia arquivos do build do metodocalma
  execSync(`xcopy "public\\metodocalma\\dist\\*" "dist\\metodocalma\\" /E /Y`, { 
    stdio: 'inherit',
    shell: 'cmd.exe'
  });

  console.log('✅ Build completo finalizado com sucesso!');
  console.log('📂 Site principal: dist/');
  console.log('📂 Metodocalma: dist/metodocalma/');

} catch (error) {
  console.error('❌ Erro durante o build:', error.message);
  process.exit(1);
}