const prefix = 'hong';

export const createScopedClasses: (
  componentName: string,
) => (name?: string) => string = (componentName: string) => {
  return (name) => `${prefix}-${componentName}${name ? '-' + name : ''}`;
};

export default createScopedClasses;
