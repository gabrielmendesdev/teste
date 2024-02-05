import React, { useState } from "react";
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
import "./styles.css";
import LoadingModal from "../../LoadingModal";

interface DataItem {
  category: string;
  value: number | string | "";
  data: string;
}

const TableSection: React.FC = () => {
  const [category, setCategory] = useState("");
  const [value, setValue] = useState<any>("");
  const [data, setData] = useState("");
  const [dataList, setDataList] = useState<DataItem[]>([]);
  const [categoryError, setCategoryError] = useState(false);
  const [valueError, setValueError] = useState(false);
  const [dataError, setDataError] = useState(false);
  const [dateErrorMessage, setDateErrorMessage] = useState("");
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [editingMode, setEditingMode] = useState(false);
  const [editingRow, setEditingRow] = useState<DataItem | null>(null);
  const [editableCategory, setEditableCategory] = useState("");
  const [editableValue, setEditableValue] = useState<any>("");
  const [editableData, setEditableData] = useState("");
  const [editingDateError, setEditingDateError] = useState(false);
  const [editingDateErrorMessage, setEditingDateErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState<boolean>(false)
  const [searchValue, setSearchValue] = useState("");



  const addData = async () => {
    setLoading(true);
    try {
      setOpen(true)
      await new Promise(resolve => setTimeout(resolve, 2000));
      setOpen(false)
      if (!category || value === "" || !data) {
        setCategoryError(!category);
        setValueError(value === "");
        setDataError(!data);
        return;
      }

      const dataInsert = new Date(data);
      const dataLimit = new Date("2024-01-01");

      if (dataInsert < dataLimit) {
        setDateErrorMessage("Data deve ser igual ou superior a 01/01/2024");
        setDataError(true);
        return;
      }

      const currentData = new Date();
      if (dataInsert > currentData) {
        setDateErrorMessage("Data não pode ser maior do que hoje");
        setDataError(true);
        return;
      }

      if (editingMode && editingIndex !== null) {
        const newDataList = [...dataList];
        newDataList[editingIndex] = { category, value, data };
        setDataList(newDataList);
        setEditingMode(false);
        setEditingIndex(null);
      } else {
        const novoItem: DataItem = { category, value, data };
        setDataList([...dataList, novoItem]);
      }

      setCategory("");
      setValue("");
      setData("");
      setCategoryError(false);
      setValueError(false);
      setDataError(false);
      setDateErrorMessage("");

    } catch (error) {
      console.error("Erro ao adicionar dados:", error);
    } finally {
      setLoading(false);
    }
  };

  const excluirItem = (index: number) => {
    const newDataList = [...dataList];
    newDataList.splice(index, 1);
    setDataList(newDataList);
  };

  const filteredDataList = dataList.filter((item) =>
    item.category.toLowerCase().includes(searchValue.toLowerCase())
  );

  const editItem = (index: number) => {
    if (editingMode) {
      // Se já estiver no modo de edição, salve as alterações antes de editar outra linha
      saveEditedItem(editingIndex || 0);
    }

    setEditingMode(true);
    setEditingIndex(index);
    setEditingRow(dataList[index]);
    setEditableCategory(dataList[index].category);
    setEditableValue(dataList[index].value);
    setEditableData(dataList[index].data);
  };

  const handleDateChange = (value: string) => {
    setEditableData(value);
    setEditingDateError(false);
    setEditingDateErrorMessage("");

    const dataInsert = new Date(value);
    const dataLimit = new Date("2024-01-01");
    const currentData = new Date();

    if (!value) {
      setEditingDateError(true);
      setEditingDateErrorMessage("Campo obrigatório");
    } else if (dataInsert < dataLimit) {
      setEditingDateError(true);
      setEditingDateErrorMessage("Data deve ser igual ou superior a 01/01/2024");
    } else if (dataInsert > currentData) {
      setEditingDateError(true);
      setEditingDateErrorMessage("Data não pode ser maior do que hoje");
    }
  };

  const saveEditedItem = (index: number) => {

    const dataInsert = new Date(editableData);
    const dataLimit = new Date("2024-01-01");

    if (dataInsert < dataLimit) {
      return;
    }

    const currentData = new Date();
    if (dataInsert > currentData) {
      return;
    }

    const newDataList = [...dataList];
    newDataList[index] = {
      category: editableCategory,
      value: editableValue,
      data: editableData,
    };
    setDataList(newDataList);
    setEditingMode(false);
    setEditingIndex(null);
    setEditingRow(null);
    setEditableCategory("");
    setEditableValue("");
    setEditableData("");
  };


  return (
    <div>
      <div>
        <TextField
          label="Category"
          variant="standard"
          value={category}
          onChange={(e) => {
            setCategory(e.target.value);
            setCategoryError(false);
          }}
          className="me-5 my-3"
          error={categoryError}
          helperText={categoryError && "Campo obrigatório"}
        />
        <TextField
          label="Value"
          variant="standard"
          type="number"
          value={value}
          onChange={(e) => {
            setValue((e.target as HTMLInputElement).valueAsNumber || "");
            setValueError(false);
          }}
          className="me-5 my-3"
          error={valueError}
          helperText={valueError && "Campo obrigatório"}
        />
        <TextField
          label="."
          variant="standard"
          type="date"
          value={data}
          onChange={(e) => {
            setData(e.target.value);
            setDataError(false);
            setDateErrorMessage("");
          }}
          className="me-5 my-3"
          error={dataError}
          helperText={dataError && dateErrorMessage}
        />
        <Button
          variant="outlined"
          className="mx-1 mt-4"
          onClick={addData}
        >
          {loading ? "Aguarde..." : "Adicionar"}
        </Button>
      </div>
      <div>
        <TextField
          variant="standard"
          fullWidth
          label="Buscar..."
          id="fullWidth"
          className="mb-5"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </div>
      <TableContainer component={Paper} className="bg-transparent">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell className="border-top-0">Category</TableCell>
              <TableCell>Value</TableCell>
              <TableCell>Data</TableCell>
              <TableCell>Ações</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredDataList.map((item, index) => (
              <TableRow key={index}>
                <TableCell>
                  {editingIndex === index ? (
                    <TextField
                      value={editableCategory}
                      onChange={(e) => setEditableCategory(e.target.value)}
                      error={!editableCategory}
                      helperText={!editableCategory && "Campo obrigatório"}
                      required
                    />
                  ) : (
                    item.category
                  )}
                </TableCell>

                <TableCell>
                  {editingIndex === index ? (
                    <TextField
                      value={editableValue}
                      onChange={(e) => setEditableValue(e.target.value)}
                      error={editableValue === ""}
                      helperText={editableValue === "" && "Campo obrigatório"}
                      required
                    />
                  ) : (
                    item.value
                  )}
                </TableCell>

                <TableCell>
                  {editingIndex === index ? (
                    <TextField
                      type="date"
                      value={editableData}
                      onChange={(e) => handleDateChange(e.target.value)}
                      error={editingDateError}
                      helperText={editingDateError && editingDateErrorMessage}
                      required
                    />
                  ) : (
                    item.data
                  )}
                </TableCell>
                <TableCell>
                  {editingIndex === index ? (
                    <Button
                      variant="outlined"
                      className="mx-1"
                      onClick={() => saveEditedItem(index)}
                    >
                      Salvar
                    </Button>
                  ) : (
                    <Button
                      variant="outlined"
                      className="mx-1"
                      onClick={() => editItem(index)}
                    >
                      Editar
                    </Button>
                  )}
                  <Button
                    variant="outlined"
                    className="mx-1"
                    onClick={() => excluirItem(index)}
                  >
                    Excluir
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <LoadingModal open={open} />
    </div>
  );
};

export default TableSection;
