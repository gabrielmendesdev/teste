import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  TextField,
} from "@mui/material";
import { useState } from "react";
import "./styles.css";

interface DataItem {
  categoria: string;
  valor: number | "";
  data: string;
}

const MinhaPagina: React.FC = () => {
  const [categoria, setCategoria] = useState("");
  const [valor, setValor] = useState<number | "">("");
  const [data, setData] = useState("");
  const [dataList, setDataList] = useState<DataItem[]>([]);

  const adicionarDados = () => {
    const novoItem: DataItem = {
      categoria,
      valor,
      data,
    };
    setDataList([...dataList, novoItem]);

    // Limpar os campos após adicionar
    setCategoria("");
    setValor("");
    setData("");
  };

  return (
    <div>
      <div>
        <TextField
          label="Categoria"
          variant="standard"
          value={categoria}
          onChange={(e) => setCategoria(e.target.value)}
          className="me-5 my-3"
        />
        <TextField
          label="Valor"
          variant="standard"
          type="number"
          value={valor}
          onChange={(e) =>
            setValor((e.target as HTMLInputElement).valueAsNumber || "")
          }
          className="me-5 my-3"
        />
        <TextField
          label
          variant="standard"
          type="date"
          value={data}
          onChange={(e) => setData(e.target.value)}
          className="me-5 my-3"
        />
        <Button variant="outlined" onClick={adicionarDados} className="mt-4">
          Adicionar
        </Button>
      </div>
      <div>
        <TextField
          variant="standard"
          fullWidth
          label="Buscar..."
          id="fullWidth"
          className="mb-5"
        />
      </div>
      <TableContainer component={Paper} className="bg-transparent">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell className="border-top-0">Categoria</TableCell>
              <TableCell>Valor</TableCell>
              <TableCell>Data</TableCell>
              <TableCell>Ações</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {dataList.map((item, index) => (
              <TableRow key={index}>
                <TableCell>{item.categoria}</TableCell>
                <TableCell>{item.valor}</TableCell>
                <TableCell>{item.data}</TableCell>
                <TableCell>
                  <Button
                    variant="outlined"
                    className="mx-1"
                  >
                    Salvar
                  </Button>
                  <Button
                    variant="outlined"
                    className="mx-1"
                  >
                    Excluir
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default MinhaPagina;
