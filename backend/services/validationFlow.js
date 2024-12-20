// services/validationFlow.js
const selectValidators = (validators) => {
    return validators
      .sort((a, b) => b.greenScore - a.greenScore)
      .slice(0, 10); // Selección de top 10 validadores
  };
  
  const validateBlock = (block) => {
    const isValid = block.transactions.every((tx) => tx.valid); // Ejemplo de validación
    return isValid;
  };
  
  const handleValidation = (validators, block) => {
    const selectedValidators = selectValidators(validators);
    const results = selectedValidators.map((validator) => validateBlock(block));
    
    return results.includes(false) ? "Failed" : "Success";
  };
  
  module.exports = { handleValidation };
  