import React, {useCallback, useState} from 'react';
import {ActionList, Frame, Icon, TopBar, VisuallyHidden} from '@shopify/polaris';
import {ArrowLeftMinor, QuestionMarkMajor} from '@shopify/polaris-icons';

const Navbar = ({children}) => {
    const [isAuthed, setIsAuthed] = useState(false);
    const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
    const [isSecondaryMenuOpen, setIsSecondaryMenuOpen] = useState(false);
    const [isSearchActive, setIsSearchActive] = useState(false);
    const [searchValue, setSearchValue] = useState('');
  
    const toggleIsUserMenuOpen = useCallback(() => setIsUserMenuOpen(isUserMenuOpen => !isUserMenuOpen), []);
  
    const toggleIsSecondaryMenuOpen = useCallback(() => setIsSecondaryMenuOpen(isSecondaryMenuOpen => !isSecondaryMenuOpen), []);
  
    const handleSearchResultsDismiss = useCallback(() => {
      setIsSearchActive(false);
      setSearchValue('');
    }, []);
  
    const handleSearchChange = useCallback(value => {
      setSearchValue(value);
      setIsSearchActive(value.length > 0);
    }, []);
  
    const handleNavigationToggle = useCallback(() => {
      console.log('toggle navigation visibility');
    }, []);
  
    const logo = {
      width: 124,
      topBarSource: '../fishtanklogo.png',
      url: '/',
      accessibilityLabel: 'Jaded Pixel'
    };
  
    const userMenuMarkup = <TopBar.UserMenu actions={[{
      items: [{ content: 'Back to Shopify', icon: ArrowLeftMinor }]
    }, {
      items: [{ content: 'Community forums' }]
    }]} name="Dharma" detail="Jaded Pixel" initials="D" open={isUserMenuOpen} onToggle={toggleIsUserMenuOpen} />;
  
    const searchResultsMarkup = <ActionList items={[{ content: 'Shopify help center' }, { content: 'Community forums' }]} />;
  
    const searchFieldMarkup = <TopBar.SearchField onChange={handleSearchChange} value={searchValue} placeholder="Search" showFocusBorder />;
  
    const secondaryMenuMarkup = <TopBar.Menu activatorContent={<span>
            <Icon source={QuestionMarkMajor} />
            <VisuallyHidden>Secondary menu</VisuallyHidden>
          </span>} open={isSecondaryMenuOpen} onOpen={toggleIsSecondaryMenuOpen} onClose={toggleIsSecondaryMenuOpen} actions={[{
      items: [{ content: 'Community forums' }]
    }]} />;
  
    const topBarMarkupAuthed = <TopBar userMenu={userMenuMarkup} secondaryMenu={secondaryMenuMarkup} searchField={searchFieldMarkup} searchResults={searchResultsMarkup} onSearchResultsDismiss={handleSearchResultsDismiss} onNavigationToggle={handleNavigationToggle} searchResultsVisible={false} showNavigationToggle={true} />;

    const topBarMarkupNotAuthed = <TopBar secondaryMenu={secondaryMenuMarkup} onNavigationToggle={handleNavigationToggle} searchResultsVisible={false} showNavigationToggle={true} />;
  
    return (
        <>
            {isAuthed ? <Frame topBar={topBarMarkupAuthed} logo={logo}> {children} </Frame> : <Frame topBar={topBarMarkupNotAuthed} logo={logo}> {children} </Frame> 
            }
        </>    
        
    )
}

export default Navbar