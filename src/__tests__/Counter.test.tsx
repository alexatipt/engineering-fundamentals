import { render, screen, fireEvent} from "@testing-library/react";
import Counter from "../Counter";

test("increments count when button is clicked", () => {
    render(<Counter />);
  const button = screen.getByText(/count is 0/i);
  expect(button).toBeInTheDocument();

  fireEvent.click(button);

  expect(screen.getByText(/count is 1/i)).toBeInTheDocument();
});