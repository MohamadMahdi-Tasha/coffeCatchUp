// Codes By Mahdi Tasha
// Importing Part
import React, {useState, useEffect, useRef} from "react";
import IconComponent from './iconComponent';

// Defining type of props
interface openedInterface {}

// Exporting functional component as default
export default function DatePickerComponent():JSX.Element{
    // Variables
    const monthNames:string[] = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const today:Date = new Date();
    const todayYear:number = today.getFullYear();
    const todayMonth:number = today.getMonth();
    const todayDate:number = today.getDate();
    const todayMonthName:string = monthNames[todayMonth];

    // Creating States
    const [isOpened, setOpened] = useState(false);
    const [showingMonth, setShowingMonth] = useState(todayMonthName);
    const [showingDate, setShowingDate] = useState(todayDate);
    const [showingYear, setShowingYear] = useState(todayYear);
    const [isYearSelectorShowing, setYearSelectorShowing] = useState(false);

    // Defining type of props
    interface childrenInterface {children: React.ReactNode | string;}
    interface dayButtonInterface {
        children?: React.ReactNode;
        hasNoContent? : boolean;
    }
    interface monthHolderInterface {
        children: React.ReactNode;
        isOpened: boolean;
    }

    // Small Components Related To this Component
    const YearButton = ({children}:childrenInterface):JSX.Element => <button onClick={():void => {
        setShowingYear(Number(children));
        setYearSelectorShowing(false);
    }} className={'px-3 py-1 rounded-[40rem] text-center text-white hover:bg-white/20'}>{children}</button>;
    const WeekButton = ({children}: childrenInterface): JSX.Element => <button className={'w-7 h-7 pointer-events-none rounded-full text-center text-white/40'}>{children}</button>;
    const MonthHolder = ({children, isOpened}: monthHolderInterface): JSX.Element => <div data-opened={isOpened} className={'grid w-full right-0 data-[opened="false"]:translate-x-[120%] top-0 absolute gap-3 grid-cols-7'}>{children}</div>
    function DayButton({children, hasNoContent}: dayButtonInterface):JSX.Element {
        // Creating State
        const [isSelected, setSelected] = useState(false);

        // Returning JSX
        return (
            <button
                className={(hasNoContent) ? 'w-7 h-7 pointer-events-none' : 'btn-with-content w-7 h-7 data-[selected="true"]:bg-white/20 data-[selected="true"]:bg-white/20 rounded-full text-center text-white hover:bg-white/20 transition-all'}
                data-selected={isSelected}
                onClick={():void => setShowingDate(Number(children))}>
                {children}
            </button>
        )
    }

    function BottomSide():JSX.Element {
        // Creating Ref
        const monthElementsHolderRef:any = useRef();

        // using 'useEffect' to Set Attribute On Month To Show
        useEffect(() => {
            const monthElementHolder:HTMLElement = monthElementsHolderRef.current;
            const elementToSetOpened:HTMLElement | any = monthElementHolder.querySelector(`div:nth-of-type(${todayMonth})`);
            const dayElementToActivate:HTMLElement | any = elementToSetOpened.querySelector(`button.btn-with-content:nth-of-type(${todayDate + 3})`);

            elementToSetOpened.setAttribute('data-opened', 'true');
            dayElementToActivate.setAttribute('data-selected', 'true');
        }, [])

        // Returning JSX
        return(
            <div className={'w-full overflow-hidden shadow backdrop-blur-md bg-black/20 p-3 rounded-md relative'}>
                <div className={'flex items-center justify-between mb-3'}>
                    <button onClick={():void => setYearSelectorShowing(true)} className={'flex items-center gap-3 text-white px-5 h-7 hover:bg-white/20 rounded-md transition-all'}>
                        <span>{showingMonth} {showingYear}</span>
                        <IconComponent type={'chevron-down'}/>
                    </button>
                    <div className={'flex gap-3'}>
                        <button onClick={handleClickOfPreviousMonth} className={'w-7 h-7 transition-all hover:bg-white/20 rounded-full flex items-center justify-center text-white'}><IconComponent type={'chevron-left'}/></button>
                        <button onClick={handleClickOfNextMonth} className={'w-7 h-7 transition-all hover:bg-white/20 rounded-full flex items-center justify-center text-white'}><IconComponent type={'chevron-right'}/></button>
                    </div>
                </div>
                <div data-opened={isYearSelectorShowing} className={'data-[opened="false"]:top-full data-[opened="false"]:top-0 transition-all absolute backdrop-blur-md p-3 z-20 bg-blue-600 top-0 left-0 w-full h-full overflow-auto grid grid-cols-4 gap-5'}>
                    <YearButton>1900</YearButton>
                    <YearButton>1901</YearButton>
                    <YearButton>1902</YearButton>
                    <YearButton>1903</YearButton>
                    <YearButton>1904</YearButton>
                    <YearButton>1904</YearButton>
                    <YearButton>1905</YearButton>
                    <YearButton>1906</YearButton>
                    <YearButton>1907</YearButton>
                    <YearButton>1908</YearButton>
                    <YearButton>1909</YearButton>
                    <YearButton>1910</YearButton>
                    <YearButton>1911</YearButton>
                    <YearButton>1912</YearButton>
                    <YearButton>1913</YearButton>
                    <YearButton>1914</YearButton>
                    <YearButton>1915</YearButton>
                    <YearButton>1916</YearButton>
                    <YearButton>1917</YearButton>
                    <YearButton>1918</YearButton>
                    <YearButton>1919</YearButton>
                    <YearButton>1920</YearButton>
                    <YearButton>1921</YearButton>
                    <YearButton>1922</YearButton>
                    <YearButton>1923</YearButton>
                    <YearButton>1924</YearButton>
                    <YearButton>1925</YearButton>
                    <YearButton>1926</YearButton>
                    <YearButton>1927</YearButton>
                    <YearButton>1928</YearButton>
                    <YearButton>1929</YearButton>
                    <YearButton>1930</YearButton>
                    <YearButton>1931</YearButton>
                    <YearButton>1932</YearButton>
                    <YearButton>1933</YearButton>
                    <YearButton>1934</YearButton>
                    <YearButton>1935</YearButton>
                    <YearButton>1936</YearButton>
                    <YearButton>1937</YearButton>
                    <YearButton>1938</YearButton>
                    <YearButton>1939</YearButton>
                    <YearButton>1940</YearButton>
                    <YearButton>1941</YearButton>
                    <YearButton>1942</YearButton>
                    <YearButton>1943</YearButton>
                    <YearButton>1944</YearButton>
                    <YearButton>1945</YearButton>
                    <YearButton>1946</YearButton>
                    <YearButton>1947</YearButton>
                    <YearButton>1948</YearButton>
                    <YearButton>1949</YearButton>
                    <YearButton>1950</YearButton>
                    <YearButton>1951</YearButton>
                    <YearButton>1952</YearButton>
                    <YearButton>1953</YearButton>
                    <YearButton>1954</YearButton>
                    <YearButton>1955</YearButton>
                    <YearButton>1956</YearButton>
                    <YearButton>1957</YearButton>
                    <YearButton>1958</YearButton>
                    <YearButton>1959</YearButton>
                    <YearButton>1960</YearButton>
                    <YearButton>1961</YearButton>
                    <YearButton>1962</YearButton>
                    <YearButton>1963</YearButton>
                    <YearButton>1964</YearButton>
                    <YearButton>1965</YearButton>
                    <YearButton>1966</YearButton>
                    <YearButton>1967</YearButton>
                    <YearButton>1968</YearButton>
                    <YearButton>1969</YearButton>
                    <YearButton>1970</YearButton>
                    <YearButton>1971</YearButton>
                    <YearButton>1972</YearButton>
                    <YearButton>1973</YearButton>
                    <YearButton>1974</YearButton>
                    <YearButton>1975</YearButton>
                    <YearButton>1976</YearButton>
                    <YearButton>1977</YearButton>
                    <YearButton>1978</YearButton>
                    <YearButton>1979</YearButton>
                    <YearButton>1980</YearButton>
                    <YearButton>1981</YearButton>
                    <YearButton>1982</YearButton>
                    <YearButton>1983</YearButton>
                    <YearButton>1984</YearButton>
                    <YearButton>1985</YearButton>
                    <YearButton>1986</YearButton>
                    <YearButton>1987</YearButton>
                    <YearButton>1988</YearButton>
                    <YearButton>1989</YearButton>
                    <YearButton>1990</YearButton>
                    <YearButton>1991</YearButton>
                    <YearButton>1992</YearButton>
                    <YearButton>1993</YearButton>
                    <YearButton>1994</YearButton>
                    <YearButton>1995</YearButton>
                    <YearButton>1996</YearButton>
                    <YearButton>1997</YearButton>
                    <YearButton>1998</YearButton>
                    <YearButton>1999</YearButton>
                    <YearButton>2000</YearButton>
                    <YearButton>2000</YearButton>
                    <YearButton>2001</YearButton>
                    <YearButton>2002</YearButton>
                    <YearButton>2003</YearButton>
                    <YearButton>2004</YearButton>
                    <YearButton>2005</YearButton>
                    <YearButton>2006</YearButton>
                    <YearButton>2007</YearButton>
                    <YearButton>2008</YearButton>
                    <YearButton>2009</YearButton>
                    <YearButton>2010</YearButton>
                    <YearButton>2011</YearButton>
                    <YearButton>2012</YearButton>
                    <YearButton>2013</YearButton>
                    <YearButton>2014</YearButton>
                    <YearButton>2015</YearButton>
                    <YearButton>2016</YearButton>
                    <YearButton>2017</YearButton>
                    <YearButton>2018</YearButton>
                    <YearButton>2019</YearButton>
                    <YearButton>2020</YearButton>
                    <YearButton>2021</YearButton>
                    <YearButton>2022</YearButton>
                    <YearButton>2023</YearButton>
                    <YearButton>2024</YearButton>
                    <YearButton>2025</YearButton>
                    <YearButton>2026</YearButton>
                    <YearButton>2027</YearButton>
                    <YearButton>2028</YearButton>
                    <YearButton>2029</YearButton>
                    <YearButton>2030</YearButton>
                    <YearButton>2031</YearButton>
                    <YearButton>2032</YearButton>
                    <YearButton>2033</YearButton>
                    <YearButton>2034</YearButton>
                    <YearButton>2035</YearButton>
                    <YearButton>2036</YearButton>
                    <YearButton>2037</YearButton>
                    <YearButton>2038</YearButton>
                    <YearButton>2039</YearButton>
                    <YearButton>2040</YearButton>
                    <YearButton>2041</YearButton>
                    <YearButton>2042</YearButton>
                    <YearButton>2043</YearButton>
                    <YearButton>2044</YearButton>
                    <YearButton>2045</YearButton>
                    <YearButton>2046</YearButton>
                    <YearButton>2047</YearButton>
                    <YearButton>2048</YearButton>
                    <YearButton>2049</YearButton>
                    <YearButton>2050</YearButton>
                    <YearButton>2051</YearButton>
                    <YearButton>2052</YearButton>
                    <YearButton>2053</YearButton>
                    <YearButton>2054</YearButton>
                    <YearButton>2055</YearButton>
                    <YearButton>2056</YearButton>
                    <YearButton>2057</YearButton>
                    <YearButton>2058</YearButton>
                    <YearButton>2059</YearButton>
                    <YearButton>2060</YearButton>
                    <YearButton>2061</YearButton>
                    <YearButton>2062</YearButton>
                    <YearButton>2063</YearButton>
                    <YearButton>2064</YearButton>
                    <YearButton>2065</YearButton>
                    <YearButton>2066</YearButton>
                    <YearButton>2067</YearButton>
                    <YearButton>2068</YearButton>
                    <YearButton>2069</YearButton>
                    <YearButton>2070</YearButton>
                    <YearButton>2071</YearButton>
                    <YearButton>2072</YearButton>
                    <YearButton>2073</YearButton>
                    <YearButton>2074</YearButton>
                    <YearButton>2075</YearButton>
                    <YearButton>2076</YearButton>
                    <YearButton>2077</YearButton>
                    <YearButton>2078</YearButton>
                    <YearButton>2079</YearButton>
                    <YearButton>2080</YearButton>
                    <YearButton>2081</YearButton>
                    <YearButton>2082</YearButton>
                    <YearButton>2083</YearButton>
                    <YearButton>2084</YearButton>
                    <YearButton>2085</YearButton>
                    <YearButton>2086</YearButton>
                    <YearButton>2087</YearButton>
                    <YearButton>2088</YearButton>
                    <YearButton>2089</YearButton>
                    <YearButton>2090</YearButton>
                    <YearButton>2091</YearButton>
                    <YearButton>2092</YearButton>
                    <YearButton>2093</YearButton>
                    <YearButton>2094</YearButton>
                    <YearButton>2095</YearButton>
                    <YearButton>2096</YearButton>
                    <YearButton>2097</YearButton>
                    <YearButton>2098</YearButton>
                    <YearButton>2099</YearButton>
                    <YearButton>3000</YearButton>
                </div>
                <div>
                    <div className={'grid gap-3 mb-3 grid-cols-7'}>
                        <WeekButton>S</WeekButton>
                        <WeekButton>S</WeekButton>
                        <WeekButton>M</WeekButton>
                        <WeekButton>T</WeekButton>
                        <WeekButton>W</WeekButton>
                        <WeekButton>T</WeekButton>
                        <WeekButton>F</WeekButton>
                    </div>
                    <div ref={monthElementsHolderRef} className={'relative h-[200px]'}>
                        <MonthHolder isOpened={false}>
                            <DayButton>1</DayButton>
                            <DayButton>2</DayButton>
                            <DayButton>3</DayButton>
                            <DayButton>4</DayButton>
                            <DayButton>5</DayButton>
                            <DayButton>6</DayButton>
                            <DayButton>7</DayButton>
                            <DayButton>8</DayButton>
                            <DayButton>9</DayButton>
                            <DayButton>10</DayButton>
                            <DayButton>11</DayButton>
                            <DayButton>12</DayButton>
                            <DayButton>13</DayButton>
                            <DayButton>14</DayButton>
                            <DayButton>15</DayButton>
                            <DayButton>16</DayButton>
                            <DayButton>17</DayButton>
                            <DayButton>18</DayButton>
                            <DayButton>19</DayButton>
                            <DayButton>20</DayButton>
                            <DayButton>21</DayButton>
                            <DayButton>22</DayButton>
                            <DayButton>23</DayButton>
                            <DayButton>24</DayButton>
                            <DayButton>25</DayButton>
                            <DayButton>26</DayButton>
                            <DayButton>27</DayButton>
                            <DayButton>28</DayButton>
                            <DayButton>29</DayButton>
                            <DayButton>30</DayButton>
                            <DayButton>31</DayButton>
                            <DayButton hasNoContent />
                            <DayButton hasNoContent />
                            <DayButton hasNoContent />
                            <DayButton hasNoContent />
                        </MonthHolder>
                        <MonthHolder isOpened={false}>
                            <DayButton hasNoContent />
                            <DayButton hasNoContent />
                            <DayButton hasNoContent />
                            <DayButton>1</DayButton>
                            <DayButton>2</DayButton>
                            <DayButton>3</DayButton>
                            <DayButton>4</DayButton>
                            <DayButton>5</DayButton>
                            <DayButton>6</DayButton>
                            <DayButton>7</DayButton>
                            <DayButton>8</DayButton>
                            <DayButton>9</DayButton>
                            <DayButton>10</DayButton>
                            <DayButton>11</DayButton>
                            <DayButton>12</DayButton>
                            <DayButton>13</DayButton>
                            <DayButton>14</DayButton>
                            <DayButton>15</DayButton>
                            <DayButton>16</DayButton>
                            <DayButton>17</DayButton>
                            <DayButton>18</DayButton>
                            <DayButton>19</DayButton>
                            <DayButton>20</DayButton>
                            <DayButton>21</DayButton>
                            <DayButton>22</DayButton>
                            <DayButton>23</DayButton>
                            <DayButton>24</DayButton>
                            <DayButton>25</DayButton>
                            <DayButton>26</DayButton>
                            <DayButton>27</DayButton>
                            <DayButton>28</DayButton>
                            <DayButton hasNoContent />
                            <DayButton hasNoContent />
                            <DayButton hasNoContent />
                            <DayButton hasNoContent />
                        </MonthHolder>
                        <MonthHolder isOpened={false}>
                            <DayButton hasNoContent />
                            <DayButton hasNoContent />
                            <DayButton hasNoContent />
                            <DayButton>1</DayButton>
                            <DayButton>2</DayButton>
                            <DayButton>3</DayButton>
                            <DayButton>4</DayButton>
                            <DayButton>5</DayButton>
                            <DayButton>6</DayButton>
                            <DayButton>7</DayButton>
                            <DayButton>8</DayButton>
                            <DayButton>9</DayButton>
                            <DayButton>10</DayButton>
                            <DayButton>11</DayButton>
                            <DayButton>12</DayButton>
                            <DayButton>13</DayButton>
                            <DayButton>14</DayButton>
                            <DayButton>15</DayButton>
                            <DayButton>16</DayButton>
                            <DayButton>17</DayButton>
                            <DayButton>18</DayButton>
                            <DayButton>19</DayButton>
                            <DayButton>20</DayButton>
                            <DayButton>21</DayButton>
                            <DayButton>22</DayButton>
                            <DayButton>23</DayButton>
                            <DayButton>24</DayButton>
                            <DayButton>25</DayButton>
                            <DayButton>26</DayButton>
                            <DayButton>27</DayButton>
                            <DayButton>28</DayButton>
                            <DayButton>29</DayButton>
                            <DayButton>30</DayButton>
                            <DayButton>31</DayButton>
                            <DayButton hasNoContent />
                        </MonthHolder>
                        <MonthHolder isOpened={false}>
                            <DayButton hasNoContent />
                            <DayButton hasNoContent />
                            <DayButton hasNoContent />
                            <DayButton hasNoContent />
                            <DayButton hasNoContent />
                            <DayButton hasNoContent />
                            <DayButton>1</DayButton>
                            <DayButton>2</DayButton>
                            <DayButton>3</DayButton>
                            <DayButton>4</DayButton>
                            <DayButton>5</DayButton>
                            <DayButton>6</DayButton>
                            <DayButton>7</DayButton>
                            <DayButton>8</DayButton>
                            <DayButton>9</DayButton>
                            <DayButton>10</DayButton>
                            <DayButton>11</DayButton>
                            <DayButton>12</DayButton>
                            <DayButton>13</DayButton>
                            <DayButton>14</DayButton>
                            <DayButton>15</DayButton>
                            <DayButton>16</DayButton>
                            <DayButton>17</DayButton>
                            <DayButton>18</DayButton>
                            <DayButton>19</DayButton>
                            <DayButton>20</DayButton>
                            <DayButton>21</DayButton>
                            <DayButton>22</DayButton>
                            <DayButton>23</DayButton>
                            <DayButton>24</DayButton>
                            <DayButton>25</DayButton>
                            <DayButton>26</DayButton>
                            <DayButton>27</DayButton>
                            <DayButton>28</DayButton>
                            <DayButton>29</DayButton>
                            <DayButton>30</DayButton>
                        </MonthHolder>
                        <MonthHolder isOpened={false}>
                            <DayButton hasNoContent />
                            <DayButton>1</DayButton>
                            <DayButton>2</DayButton>
                            <DayButton>3</DayButton>
                            <DayButton>4</DayButton>
                            <DayButton>5</DayButton>
                            <DayButton>6</DayButton>
                            <DayButton>7</DayButton>
                            <DayButton>8</DayButton>
                            <DayButton>9</DayButton>
                            <DayButton>10</DayButton>
                            <DayButton>11</DayButton>
                            <DayButton>12</DayButton>
                            <DayButton>13</DayButton>
                            <DayButton>14</DayButton>
                            <DayButton>15</DayButton>
                            <DayButton>16</DayButton>
                            <DayButton>17</DayButton>
                            <DayButton>18</DayButton>
                            <DayButton>19</DayButton>
                            <DayButton>20</DayButton>
                            <DayButton>21</DayButton>
                            <DayButton>22</DayButton>
                            <DayButton>23</DayButton>
                            <DayButton>24</DayButton>
                            <DayButton>25</DayButton>
                            <DayButton>26</DayButton>
                            <DayButton>27</DayButton>
                            <DayButton>28</DayButton>
                            <DayButton>29</DayButton>
                            <DayButton>30</DayButton>
                            <DayButton>31</DayButton>
                            <DayButton hasNoContent />
                            <DayButton hasNoContent />
                            <DayButton hasNoContent />
                        </MonthHolder>
                        <MonthHolder isOpened={false}>
                            <DayButton hasNoContent />
                            <DayButton hasNoContent />
                            <DayButton hasNoContent />
                            <DayButton hasNoContent />
                            <DayButton>1</DayButton>
                            <DayButton>2</DayButton>
                            <DayButton>3</DayButton>
                            <DayButton>4</DayButton>
                            <DayButton>5</DayButton>
                            <DayButton>6</DayButton>
                            <DayButton>7</DayButton>
                            <DayButton>8</DayButton>
                            <DayButton>9</DayButton>
                            <DayButton>10</DayButton>
                            <DayButton>11</DayButton>
                            <DayButton>12</DayButton>
                            <DayButton>13</DayButton>
                            <DayButton>14</DayButton>
                            <DayButton>15</DayButton>
                            <DayButton>16</DayButton>
                            <DayButton>17</DayButton>
                            <DayButton>18</DayButton>
                            <DayButton>19</DayButton>
                            <DayButton>20</DayButton>
                            <DayButton>21</DayButton>
                            <DayButton>22</DayButton>
                            <DayButton>23</DayButton>
                            <DayButton>24</DayButton>
                            <DayButton>25</DayButton>
                            <DayButton>26</DayButton>
                            <DayButton>27</DayButton>
                            <DayButton>28</DayButton>
                            <DayButton>29</DayButton>
                            <DayButton>30</DayButton>
                            <DayButton hasNoContent />
                        </MonthHolder>
                        <MonthHolder isOpened={false}>
                            <DayButton hasNoContent />
                            <DayButton hasNoContent />
                            <DayButton hasNoContent />
                            <DayButton hasNoContent />
                            <DayButton hasNoContent />
                            <DayButton hasNoContent />
                            <DayButton>1</DayButton>
                            <DayButton>2</DayButton>
                            <DayButton>3</DayButton>
                            <DayButton>4</DayButton>
                            <DayButton>5</DayButton>
                            <DayButton>6</DayButton>
                            <DayButton>7</DayButton>
                            <DayButton>8</DayButton>
                            <DayButton>9</DayButton>
                            <DayButton>10</DayButton>
                            <DayButton>11</DayButton>
                            <DayButton>12</DayButton>
                            <DayButton>13</DayButton>
                            <DayButton>14</DayButton>
                            <DayButton>15</DayButton>
                            <DayButton>16</DayButton>
                            <DayButton>17</DayButton>
                            <DayButton>18</DayButton>
                            <DayButton>19</DayButton>
                            <DayButton>20</DayButton>
                            <DayButton>21</DayButton>
                            <DayButton>22</DayButton>
                            <DayButton>23</DayButton>
                            <DayButton>24</DayButton>
                            <DayButton>25</DayButton>
                            <DayButton>26</DayButton>
                            <DayButton>27</DayButton>
                            <DayButton>28</DayButton>
                            <DayButton>29</DayButton>
                            <DayButton>30</DayButton>
                            <DayButton>31</DayButton>
                            <DayButton hasNoContent />
                            <DayButton hasNoContent />
                            <DayButton hasNoContent />
                            <DayButton hasNoContent />
                            <DayButton hasNoContent />
                        </MonthHolder>
                        <MonthHolder isOpened={false}>
                            <DayButton hasNoContent />
                            <DayButton hasNoContent />
                            <DayButton>1</DayButton>
                            <DayButton>2</DayButton>
                            <DayButton>3</DayButton>
                            <DayButton>4</DayButton>
                            <DayButton>5</DayButton>
                            <DayButton>6</DayButton>
                            <DayButton>7</DayButton>
                            <DayButton>8</DayButton>
                            <DayButton>9</DayButton>
                            <DayButton>10</DayButton>
                            <DayButton>11</DayButton>
                            <DayButton>12</DayButton>
                            <DayButton>13</DayButton>
                            <DayButton>14</DayButton>
                            <DayButton>15</DayButton>
                            <DayButton>16</DayButton>
                            <DayButton>17</DayButton>
                            <DayButton>18</DayButton>
                            <DayButton>19</DayButton>
                            <DayButton>20</DayButton>
                            <DayButton>21</DayButton>
                            <DayButton>22</DayButton>
                            <DayButton>23</DayButton>
                            <DayButton>24</DayButton>
                            <DayButton>25</DayButton>
                            <DayButton>26</DayButton>
                            <DayButton>27</DayButton>
                            <DayButton>28</DayButton>
                            <DayButton>29</DayButton>
                            <DayButton>30</DayButton>
                            <DayButton>31</DayButton>
                            <DayButton hasNoContent />
                            <DayButton hasNoContent />
                        </MonthHolder>
                        <MonthHolder isOpened={false}>
                            <DayButton hasNoContent />
                            <DayButton hasNoContent />
                            <DayButton>1</DayButton>
                            <DayButton>2</DayButton>
                            <DayButton>3</DayButton>
                            <DayButton>4</DayButton>
                            <DayButton>5</DayButton>
                            <DayButton>6</DayButton>
                            <DayButton>7</DayButton>
                            <DayButton>8</DayButton>
                            <DayButton>9</DayButton>
                            <DayButton>10</DayButton>
                            <DayButton>11</DayButton>
                            <DayButton>12</DayButton>
                            <DayButton>13</DayButton>
                            <DayButton>14</DayButton>
                            <DayButton>15</DayButton>
                            <DayButton>16</DayButton>
                            <DayButton>17</DayButton>
                            <DayButton>18</DayButton>
                            <DayButton>19</DayButton>
                            <DayButton>20</DayButton>
                            <DayButton>21</DayButton>
                            <DayButton>22</DayButton>
                            <DayButton>23</DayButton>
                            <DayButton>24</DayButton>
                            <DayButton>25</DayButton>
                            <DayButton>26</DayButton>
                            <DayButton>27</DayButton>
                            <DayButton>28</DayButton>
                            <DayButton>29</DayButton>
                            <DayButton>30</DayButton>
                            <DayButton hasNoContent />
                            <DayButton hasNoContent />
                        </MonthHolder>
                        <MonthHolder isOpened={false}>
                            <DayButton hasNoContent />
                            <DayButton hasNoContent />
                            <DayButton hasNoContent />
                            <DayButton hasNoContent />
                            <DayButton hasNoContent />
                            <DayButton>1</DayButton>
                            <DayButton>2</DayButton>
                            <DayButton>3</DayButton>
                            <DayButton>4</DayButton>
                            <DayButton>5</DayButton>
                            <DayButton>6</DayButton>
                            <DayButton>7</DayButton>
                            <DayButton>8</DayButton>
                            <DayButton>9</DayButton>
                            <DayButton>10</DayButton>
                            <DayButton>11</DayButton>
                            <DayButton>12</DayButton>
                            <DayButton>13</DayButton>
                            <DayButton>14</DayButton>
                            <DayButton>15</DayButton>
                            <DayButton>16</DayButton>
                            <DayButton>17</DayButton>
                            <DayButton>18</DayButton>
                            <DayButton>19</DayButton>
                            <DayButton>20</DayButton>
                            <DayButton>21</DayButton>
                            <DayButton>22</DayButton>
                            <DayButton>23</DayButton>
                            <DayButton>24</DayButton>
                            <DayButton>25</DayButton>
                            <DayButton>26</DayButton>
                            <DayButton>27</DayButton>
                            <DayButton>28</DayButton>
                            <DayButton>29</DayButton>
                            <DayButton>30</DayButton>
                        </MonthHolder>
                        <MonthHolder isOpened={false}>
                            <DayButton>1</DayButton>
                            <DayButton>2</DayButton>
                            <DayButton>3</DayButton>
                            <DayButton>4</DayButton>
                            <DayButton>5</DayButton>
                            <DayButton>6</DayButton>
                            <DayButton>7</DayButton>
                            <DayButton>8</DayButton>
                            <DayButton>9</DayButton>
                            <DayButton>10</DayButton>
                            <DayButton>11</DayButton>
                            <DayButton>12</DayButton>
                            <DayButton>13</DayButton>
                            <DayButton>14</DayButton>
                            <DayButton>15</DayButton>
                            <DayButton>16</DayButton>
                            <DayButton>17</DayButton>
                            <DayButton>18</DayButton>
                            <DayButton>19</DayButton>
                            <DayButton>20</DayButton>
                            <DayButton>21</DayButton>
                            <DayButton>22</DayButton>
                            <DayButton>23</DayButton>
                            <DayButton>24</DayButton>
                            <DayButton>25</DayButton>
                            <DayButton>26</DayButton>
                            <DayButton>27</DayButton>
                            <DayButton>28</DayButton>
                            <DayButton>29</DayButton>
                            <DayButton>30</DayButton>
                            <DayButton>31</DayButton>
                            <DayButton hasNoContent />
                            <DayButton hasNoContent />
                            <DayButton hasNoContent />
                            <DayButton hasNoContent />
                        </MonthHolder>
                        <MonthHolder isOpened={false}>
                            <DayButton hasNoContent />
                            <DayButton hasNoContent />
                            <DayButton hasNoContent />
                            <DayButton>1</DayButton>
                            <DayButton>2</DayButton>
                            <DayButton>3</DayButton>
                            <DayButton>4</DayButton>
                            <DayButton>5</DayButton>
                            <DayButton>6</DayButton>
                            <DayButton>7</DayButton>
                            <DayButton>8</DayButton>
                            <DayButton>9</DayButton>
                            <DayButton>10</DayButton>
                            <DayButton>11</DayButton>
                            <DayButton>12</DayButton>
                            <DayButton>13</DayButton>
                            <DayButton>14</DayButton>
                            <DayButton>15</DayButton>
                            <DayButton>16</DayButton>
                            <DayButton>17</DayButton>
                            <DayButton>18</DayButton>
                            <DayButton>19</DayButton>
                            <DayButton>20</DayButton>
                            <DayButton>21</DayButton>
                            <DayButton>22</DayButton>
                            <DayButton>23</DayButton>
                            <DayButton>24</DayButton>
                            <DayButton>25</DayButton>
                            <DayButton>26</DayButton>
                            <DayButton>27</DayButton>
                            <DayButton>28</DayButton>
                            <DayButton>29</DayButton>
                            <DayButton>30</DayButton>
                            <DayButton hasNoContent />
                            <DayButton hasNoContent />
                        </MonthHolder>
                        <MonthHolder isOpened={false}>
                            <DayButton hasNoContent />
                            <DayButton hasNoContent />
                            <DayButton hasNoContent />
                            <DayButton hasNoContent />
                            <DayButton hasNoContent />
                            <DayButton>1</DayButton>
                            <DayButton>2</DayButton>
                            <DayButton>3</DayButton>
                            <DayButton>4</DayButton>
                            <DayButton>5</DayButton>
                            <DayButton>6</DayButton>
                            <DayButton>7</DayButton>
                            <DayButton>8</DayButton>
                            <DayButton>9</DayButton>
                            <DayButton>10</DayButton>
                            <DayButton>11</DayButton>
                            <DayButton>12</DayButton>
                            <DayButton>13</DayButton>
                            <DayButton>14</DayButton>
                            <DayButton>15</DayButton>
                            <DayButton>16</DayButton>
                            <DayButton>17</DayButton>
                            <DayButton>18</DayButton>
                            <DayButton>19</DayButton>
                            <DayButton>20</DayButton>
                            <DayButton>21</DayButton>
                            <DayButton>22</DayButton>
                            <DayButton>23</DayButton>
                            <DayButton>24</DayButton>
                            <DayButton>25</DayButton>
                            <DayButton>26</DayButton>
                            <DayButton>27</DayButton>
                            <DayButton>28</DayButton>
                            <DayButton>29</DayButton>
                            <DayButton>30</DayButton>
                            <DayButton>31</DayButton>
                            <DayButton hasNoContent />
                            <DayButton hasNoContent />
                            <DayButton hasNoContent />
                            <DayButton hasNoContent />
                            <DayButton hasNoContent />
                            <DayButton hasNoContent />
                        </MonthHolder>
                    </div>
                </div>
            </div>
        );
    }

    // handling clicks
    function handleClickOfPreviousMonth():void {
        const monthNameToSetsIndex:number = monthNames.indexOf(showingMonth) - 1;
        const monthNameToSet:string | undefined = monthNames[monthNameToSetsIndex];

        if (monthNameToSetsIndex > 0) {
            setShowingMonth(monthNameToSet)
        } else {
            if (showingYear > 1900) {
                setShowingYear(prevState => prevState - 1)
                setShowingMonth("December")
            }
        }
    }

    function handleClickOfNextMonth():void {
        const monthNameToSetsIndex:number = monthNames.indexOf(showingMonth) + 1;
        const monthNameToSet:string | undefined = monthNames[monthNameToSetsIndex];

        if (monthNameToSetsIndex < 11) {
            setShowingMonth(monthNameToSet)
        } else {
            if (showingYear < 3000) {
                setShowingYear(prevState => prevState + 1)
                setShowingMonth("January")
            }
        }
    }

    // Returning JSX
    return(
        <>
            <button onClick={():void => (isOpened) ? setOpened(false) : setOpened(true)} className={'border border-black/40 transition-all hover:border-white active:bg-white/20 rounded-md bg-transparent text-white w-full flex p-3 justify-between items-center mb-3'}>
                <span>{showingYear}/{showingDate}/{showingMonth}</span>
                <IconComponent type={'calender'}/>
            </button>
            {(isOpened) ? <BottomSide /> : false}
        </>
    );
}