import history, {goTo} from '.';

describe('History', ()=> {
  it('pushes path to history when goTo is called', ()=> {
    history.push = jest.fn();

    goTo('/test');

    expect(history.push).toHaveBeenCalledWith('/test');
  });
});
