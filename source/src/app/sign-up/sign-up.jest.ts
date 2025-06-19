// import '@testing-library/jest-dom';
import { render, screen} from "@testing-library/angular"
import { SignUp } from "./sign-up"

it('has Sign Up header', async () => {
    await render(SignUp);
    const header = screen.getByRole('heading', {name: 'Sign Up'});
    expect(header).toBeInTheDocument();
});