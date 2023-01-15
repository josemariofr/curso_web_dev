<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" href="style.css">
    <title>Aula 9: Integrando o HTML com outras linguagens</title>
</head>
<body>
    <h1>Integrando HTML com JavaScript</h1>
    <button id="btn">Clique aqui</button>
    <script src="script.js"></script>
    <script>
        document.getElementById("btn").addEventListener("click", function(){
            alert("Botão clicado!");
        });
    </script>

    <h1>Trabalhando com formulários dinâmicos</h1>
    <form action="form.php" method="post">
        Nome: <input type="text" name="nome"><br>
        E-mail: <input type="email" name="email"><br>
        <input type="submit" value="Enviar">
    </form>

    <h1>Integrando HTML com PHP</h1>
    <div>
        <ul>
            <?php 
                $nomes = array("João", "Maria", "José");
                foreach($nomes as $nome) {
                    echo "<li>$nome</li>";
                }
            ?>
        </ul>
    </div>
</body>
</html>
