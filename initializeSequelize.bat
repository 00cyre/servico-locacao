move "C:\Users\Pedro Ferreira\servico-locacao\src\config\*.xml" "C:\Users\Pedro Ferreira\servico-locacao\"
start /wait cmd /k "liquibase updateToTag 1.0 & exit"
move "C:\Users\Pedro Ferreira\servico-locacao\*.xml" "C:\Users\Pedro Ferreira\servico-locacao\src\config\"
