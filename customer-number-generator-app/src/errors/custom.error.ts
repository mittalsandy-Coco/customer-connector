type ErrorItem = {
  code: string;
  message: string;
};

class CustomError extends Error {
  code: string;
  statusCode: number;
  message: string;
  errors?: ErrorItem[];

  constructor(
    code: string,
    statusCode: number,
    message: string,
    errors?: ErrorItem[]
  ) {
    super(message);
    this.code = code;
    this.statusCode = statusCode;
    this.message = message;
    if (errors) {
      this.errors = errors;
    } else {
      this.errors = [
        {
          code,
          message,
        },
      ];
    }
  }
}

export default CustomError;

