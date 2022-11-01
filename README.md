Realizando o build do app para testes Android e iOS para publicar nas lojas Play Store e App Store através do EAS Build.

1. npm install -g eas-cli -> esse primeiro comando instala de forma global a CLI do EAS
2. eas login -> é necessário ter uma conta no Expo. Esse comando, vai pedir o login e senha para logar na conta do Expo
3. eas build:configure -> esse comando cria um arquivo eas.json para fazer configurações específicas na build. Além disso, cria também um projeto dentro do expo.dev com 
4. eas build --platform android -> esse comando gera o build do código atual para o formato Android, enviando pro expo.dev e gerando a build lá dentro. Dentro dessa página do build, é possível gerar um .aap para ser feito testes no aparelho Android.
5. 4. eas build --platform ios -> esse comando gera o mesmo build do código atual, porém para uma versão para o iOS. Entretanto, assim que o comando é executado, ele já pede pra fazer login na conta de desenvolvedor da Apple.
6. eas submit --platform android -> esse comando envia para o projeto dentro da Play Store (só é possível enviar, caso tenha feito as configurações e possuir uma conta de desenvolvedor).